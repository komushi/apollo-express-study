const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query { 
    getAllBooks: [Book]
    getBooksByGender(gender: String): [Book]
  }
  
  type Book { 
  	title: String
  	author: String
  	gender: String 
  }
`
