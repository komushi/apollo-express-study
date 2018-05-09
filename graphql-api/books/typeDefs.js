module.exports = `
  type Query { 
    getAllBooks: [Book]
    getBooks(gender: String): [Book]
  }
  type Book { title: String, author: String, gender: String }
`
