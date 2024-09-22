const {categoryModel}=require('../models/bookCategoryModel')


const createCategory= async(req,res)=>{
    const {categoryName} =req.body
    if(!categoryName){
        res.status(400).json({message:'something wrong please enter a valid category'})
    }

    const existCategory= await categoryModel.findOne({name:categoryName});
    if(existCategory){
        res.status(400).json({message:'category already exists '})
    }

    try{
        const Category= new categoryModel({
            name:categoryName
        })  
        await Category.save()
        res.status(200).json({message:'successfully saved'})
    }catch(error){
          res.status(500).json({message:'network error'})
          console.log(error)
    }
}


const getCategory= async(req,res)=>{
    try{
        const category= await categoryModel.find()
        res.status(200).json({category})
    }catch(error){
        res.status(400).json({message:'something went wrong'})
    }
}

module.exports={createCategory,getCategory}