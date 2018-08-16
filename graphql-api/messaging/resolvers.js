// const shortid = require('shortid');
const { db } = require('./utils/db');
const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();
const MESSAGE_ADDED_TOPIC = 'message_added';

module.exports = {

  Query: {
    hello: (root, { name }) => `Hello ${name || 'World'}!`,
    messages: (root, args) => db.get('messages').value()
  },

  Mutation: {
    addMessage: (root, { input }) => {
      const message = {
        // id: shortid.generate(),
        id: Date.now(),
        text: input.text
      };

      db
        .get('messages')
        .push(message)
        .last()
        .write();

      pubsub.publish(MESSAGE_ADDED_TOPIC, { messageAdded: message });

      return message;
    }
  },

  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator(MESSAGE_ADDED_TOPIC)
    }
  }
}
