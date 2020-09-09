const { gql } = require('apollo-server-express');
module.exports = gql`
# A text message send by users
type Message {
  id: ID!
  # Message content
  text: String!
}

# Input from user to create a message
input MessageInput {
  # Message content
  text: String!
}

type Query {
  # Test query with a parameter
  hello(name: String): String!
  # List of messages sent by users
  messages: [Message]
}

type Mutation {
  # Add a message and publish it on 'messages' subscription channel
  addMessage (input: MessageInput!): Message!
}

type Subscription {
  # When a new message is added
  messageAdded: Message!
}
`
