const mongoose = require('mongoose');
mongoose.connect('mongoDB://localhost:27017/Library');
const schema = mongoose.Schema;

var authorschema = new schema({
    author: String,
    title: String,
    genre: String,
    img: String
});
var authordata = mongoose.model('authordata', authorschema);

module.exports = authordata;