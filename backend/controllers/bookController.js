const {bookModel} =require('../models/booksModel')



const addBooks= async(req,res)=>{
     const {bookTitle,bookDescription,price,author,image,category}=req.body

    
     try{
        const Book= new bookModel({
            title:bookTitle,
            description:bookDescription,
            price:Number(price),
            author,
            image,
            category
         })
        await Book.save()
        res.status(200).json({message:'new book successfully added'})
        console.log('created')
     }catch(error){
        res.status(400).json({message:'there is a problem'})
     }
}

const getBooks=async(req,res)=>{
           try{
            const bookdetails= await bookModel.find()
            res.status(200).json({bookdetails})
           }catch(error){
            res.status(400).json({message:'there is a problem to get the details'})
           }
}

const deleteBooks=async(req,res)=>{
   const bookId=req.params.id;

   try{
      const deleteBook= await bookModel.findByIdAndDelete(bookId);
      res.status(200).json({message:'successfuly deleted'})
   }catch(error){
      res.status(400).json({message:'something went wrong'})
   }
}


const updateBook=async(req,res)=>{
   const bookId=req.params.id
   const {title,description,price,author,image,category}=req.body
   if(!bookId){
      console.log('invalid id credentials')
   }
   try{
      const updatingBook= await bookModel.findByIdAndUpdate(bookId,{title,description,price,author,image,category})
      res.status(200).json({message:'successfully updated changes'})
   }catch(error){
      console.log(error)
      res.status(400).json({message:'something went wrong'})
   }
}

module.exports={addBooks,getBooks,deleteBooks,updateBook}