const express= require('express');
const cors=require('cors');
const app= express();
const Book=require("./db/Book")

app.use(express.json());
app.use(cors());

const User=require("./db/Users");

require('./db/config');
app.post("/register",async(req,res)=>{
    let user=new User(req.body);
    let result= await user.save();
    result =result.toObject();
    delete result.password
    res.send(result);

})
app.post('/login',async (req,res)=>{
    console.log(req.body)
if(req.body.password && req.body.email)
{
    let user= await User.findOne(req.body).select("-password");
if(user){
    res.send(user)
}
    else{
        res.send({result:"no user found"});
    }
}
else{
    res.send({result:"no user found"});
}


})

app.post("/add-book",async (req,res)=>{
    let book= new Book(req.body);
    let result= await book.save();
    res.send(result)

});


app.get("/books", async (req,res)=>{
    let books= await Book.find();
    if(books.length>0){
        res.send(books)
    }
    else{
        res.send({result:"no result found"})
    }
});

app.delete("/book/:id",async (req,res)=>{
const result= await Book.deleteOne({_id:req.params.id})
res.send(req.params.id);

});
app.get("/book/:id",async(req,res)=>{
    let result=await Book.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }
        else{
            res.send({result:"No record Found..."})
        }
    
})
app.put("/book/:id",async(req,res)=>{
    let result=await Book.updateOne({_id:req.params.id},{
        $set :req.body
    }
    )
    res.send(result);
    

    
})


app.get("/search/:key",async(req,res)=>{
    let result=await Book.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }
        else{
            res.send({result:"No record Found..."})
        }
    
})



app.listen(3001,()=>{console.log("Connected Server")});







