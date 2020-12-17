const mongoose = require('mongoose');
mongoose.connect('mongoDB://localhost:27017/Library');
const schema = mongoose.Schema;
const signupschema = new schema({
    email: String,
    password: String,
    address1: String,
    address2: String,
    phone: String,
    zip: String

});

var signupdata = mongoose.model('signupdata', signupschema);
module.exports = signupdata;