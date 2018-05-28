## Example of a GraphQL API Server using apollo-server-express with Playground

## 1. Quick Start with the sample graphql-api
* books under graphql-api/books
* messaging under graphql-api/messaging

### 1-1. Clone this repo
```
$ git clone https://github.com/komushi/apollo-express-study.git
```

### 1-2. Install libraries
```
$ cd apollo-express-study
$ npm install
```

### 1-3. Edit .env to choose one of the samples -the 'books' or the 'messaging'
```
API_NAME=books
```

```
API_NAME=messaging
```

### 1-4. Start the GraphQL API Server
```
$ npm start
```

### 1-5. Test Query on [Playground](http://localhost:4000/)
* For messaging:
```
query messages{
  messages {
    text
    id
  }
}
```

* For books:
```
query getAllBooks {
  getAllBooks {
    title
    author
    gender
  }
}
```

```
query getBooksByGender{
  getBooksByGender(gender:"Female") {
    title
    author
    gender
  } 
}
```

## 2. Add your own graphql-api definition
### 2-1. Create a new folder under 'graphql-api/<myapi>'

### 2-2. Create type definition as 'graphql-api/<myapi>/typeDefs.js'

### 2-3. Create resolver as 'graphql-api/<myapi>/resolvers.js'

