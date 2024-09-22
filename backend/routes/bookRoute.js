const {addBooks,getBooks,deleteBooks,updateBook}=require('../controllers/bookController')
const Express=require('express')
const {adminJWT} =require('../middlewares/adminauth')

const BookRouter=Express.Router()

BookRouter.post('/add',addBooks)

//getting details
BookRouter.get('/data',getBooks)

//deleting books

BookRouter.delete('/delete/:id',deleteBooks)

//updating the existing book
BookRouter.put('/update/:id',updateBook)

module.exports= {BookRouter};