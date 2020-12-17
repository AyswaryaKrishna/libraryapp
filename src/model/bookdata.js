const mongoose = require('mongoose');
mongoose.connect('mongoDB://localhost:27017/Library');
const schema = mongoose.Schema;
const bookschema = new schema({
    title: String,
    author: String,
    genre: String,
    img: String

});

var bookdata = mongoose.model('bookdata', bookschema);
module.exports = bookdata;