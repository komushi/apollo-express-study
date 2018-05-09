const dotenvConfig = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { default: expressPlayground } = require('graphql-playground-middleware-express');

// Server Attributes
const PORT = 4000;
const GRAPHQL_PATH = '/graphql';
const GRAPHQL_SUBSCRIPTIONS_PATH = '/graphql';
const GRAPHQL_PLAYGROUND_PATH = '/';

// Put together a schema
const typeDefs = require(`./graphql-api/${process.env.API_NAME}/typeDefs`);
const resolvers = require(`./graphql-api/${process.env.API_NAME}/resolvers`);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// Queries
app.use(GRAPHQL_PATH, bodyParser.json(), graphqlExpress({ schema }));

// Playground
const playgroundOptions = {
	endpoint: GRAPHQL_PATH,
	subscriptionEndpoint: GRAPHQL_SUBSCRIPTIONS_PATH,
};

app.get(GRAPHQL_PLAYGROUND_PATH, expressPlayground(playgroundOptions));

const server = createServer(app);

server.listen(PORT, () => {
	new SubscriptionServer( {
		schema,
		execute,
		subscribe
	},
	{
		server,
		path: GRAPHQL_SUBSCRIPTIONS_PATH
	});

	console.log(`API Server is now running on http://localhost:${PORT}${GRAPHQL_PATH}`);
	console.log(`Playground is now running on http://localhost:${PORT}${GRAPHQL_PLAYGROUND_PATH}`);
	console.log(`API Subscriptions server is now running on ws://localhost:${PORT}${GRAPHQL_SUBSCRIPTIONS_PATH}`);
});

