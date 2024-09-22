const Mongoose= require('mongoose')


const adminSchema= Mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})


const adminModel= Mongoose.models.admin || Mongoose.model("admin",adminSchema)

module.exports={adminModel}