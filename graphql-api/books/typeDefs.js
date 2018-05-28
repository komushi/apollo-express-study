module.exports = `
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
