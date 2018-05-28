const initBooks = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
    gender: 'F'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    gender: 'M'
  },
];

module.exports = {
  Query: { 
    getAllBooks: () => {
      return initBooks;
    },
    getBooksByGender: function (rootObj, {gender}) {
      return [initBooks[0]];
    }
  }
}

