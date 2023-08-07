const mongoose=require('mongoose');
const bookSchema= new mongoose.Schema({
    bookname: String,
    description: String,
    authorname: String,
    price:Number,
    image: String,
    userid:String,
    
});
module.exports=mongoose.model("books",bookSchema);