const mongoose  = require("mongoose");

const bookSchema=new mongoose.Schema({
    title:String,
    author:String,
    isbn:String
    
});
module.exports=mongoose.model('books',bookSchema)