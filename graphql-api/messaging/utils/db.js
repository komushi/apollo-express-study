const Lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// const mkdirp = require('mkdirp');
const { resolve } = require('path');

// mkdirp(resolve(__dirname, '../history'));

const db = new Lowdb(new FileSync(resolve(__dirname, './db.json')));

// Seed an empty DB
db.defaults({
  messages: []
}).write();

module.exports = {
  db
}
