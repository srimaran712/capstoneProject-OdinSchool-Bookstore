const {adminModel}=require('../models/adminModel')

const Bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')


//adding admin


const addNewAdmin =async(req,res)=>{
const {adminname,email,password}=req.body
 const existemail=  await adminModel.findOne({email:email})
 if(existemail){
    res.status(400).json({message:'admin exists already'})
 }
 const hashingpassword= await Bcrypt.hash(password,10)

  try{
    const Admin= new adminModel({
        name:adminname,
        email:email,
        password:hashingpassword
    })
    await Admin.save()

    res.status(200).json({message:'successfully added'})

  }catch(error){
    res.status(400).json({message:'something went wrong'})
  }
}


const login=async(req,res)=>{
    const {email,password}=req.body
   const existUser =await adminModel.findOne({email:email})

   if(!existUser){
   return res.status(400).json({message:'Unauthorised email'})
   }
   const existPassword= await Bcrypt.compare(password,existUser.password)

   if(!existPassword){
   return res.status(400).json({message:'Invalid Password'})
   }

   try{
        const adminToken= jwt.sign({id:existUser._id,email:existUser.email},process.env.ADMIN_KEY,{expiresIn:'1h'})
        res.status(200).json({adminToken,message:'token created'})
   }catch{
         res.status(400).json({message:'something wrong'})
   }
}
module.exports= {addNewAdmin,login}