const bcrypt = require('bcryptjs/dist/bcrypt')
const {userModel}=require('../models/userModel')
const jwt= require('jsonwebtoken')

const Bcrypt=require('bcryptjs')// for hashing password


const createNewUser = async(req,res)=>{
    const {username,email,password,address,city,pin,mobile}=req.body

    try{
        //hashingpassword
        const hashedpassword= await bcrypt.hash(password,10)

        const User= new userModel({
            userName:username,
            email:email,
            password:hashedpassword,
            address:address,
            city:city,
            pin:pin,
            mobile:Number(mobile)
        })

        await User.save()
        res.status(200).json({message:'account successfully created'})
    }catch(error){
         res.status(400).json({message:'something went wrong'})
    }
}

const loginUser =async(req,res)=>{
    const {email,password}=req.body

    const existEmail = await userModel.findOne({email:email})

    if(!existEmail){
        console.log('user not found')
        res.status(400).json({message:'user not found'})
    }
    //checking password
    const comparepassword= await bcrypt.compare(password,existEmail.password)
    if(!comparepassword){
        res.status(400).json({message:'invalid password'})
    }
try{
    const token= jwt.sign({id:existEmail._id,email:existEmail.email,name:existEmail.userName},process.env.SECRET_KEY,{expiresIn:'1h'})
    res.status(200).json({token,existEmail,message:'login successful'})
}catch(error){
    res.status(403).json({message:'token not found'})
}
   
}





module.exports={createNewUser,loginUser}