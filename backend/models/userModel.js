const Mongoose=require('mongoose')

const userSchema=Mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    pin:{type:String,required:true},
    mobile:{type:Number,required:true,min: 1000000000, max: 9999999999},

    orders:[{type:Mongoose.Schema.Types.ObjectId,ref:"order"}]
   
})

const userModel= Mongoose.models.User || Mongoose.model("User",userSchema)

module.exports={userModel}