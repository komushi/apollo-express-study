const dotenvConfig = require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');

// Server Attributes
const PORT = 4000;
const GRAPHQL_PATH = '/graphql';

// Put together a schema
const typeDefs = require(`./graphql-api/${process.env.API_NAME}/typeDefs`);
const resolvers = require(`./graphql-api/${process.env.API_NAME}/resolvers`);

const server = new ApolloServer({ typeDefs, resolvers });

var app = express();

server.applyMiddleware({app});

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
});

