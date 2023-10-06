const express=require('express')
const router =express.Router()
const book=require('../models/book')
router.use(express.json());

//getting books
router.get('/books',async(req,res)=>{
    try{
        const books=await book.find();
        res.json(books);

    }catch(error){
        res.status(500).json({message:error.message})
    }
})
//create book
router.post('/books',async(req,res)=>{
   const Book=new book({
    title:req.body.title,
    author:req.body.author,
    isbn:req.body.isbn
   });

   try{
    const newBook=await Book.save();
    res.status(201).json(newBook);
   }catch(error){
    res.status(400).json({message:error.message});
   }
})

//deleting one
router.delete('/books/:isbn',async(req,res)=>{
    const isbn=req.params.isbn;
    try{
        await book.deleteOne({isbn:isbn});
        res.json({message:'Succesfully Deleted'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
})


module.exports=router