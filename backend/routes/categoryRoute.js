const Express=require('express')

const {createCategory,getCategory}=require('../controllers/categoryController')
const { categoryModel } = require('../models/bookCategoryModel')


const CategoryRouter=Express.Router()

CategoryRouter.post('/add',createCategory)
CategoryRouter.get('/data',getCategory)


module.exports={CategoryRouter}