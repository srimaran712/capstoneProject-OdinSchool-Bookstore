const Mongoose=require('mongoose')


const bookSchema= Mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    author:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true} 

})
const bookModel=Mongoose.models.books ||Mongoose.model("books",bookSchema)

module.exports={bookModel}