const Mongoose =require('mongoose')


const categorySchema=Mongoose.Schema({
    name:{type:String,required:true,unique:true},
    createdAt:{type:Date, default:Date.now}
})


const categoryModel=Mongoose.models.category||Mongoose.model('category',categorySchema)

module.exports={categoryModel}