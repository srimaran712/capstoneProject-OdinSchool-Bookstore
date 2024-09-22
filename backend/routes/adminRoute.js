const Express =require('express')
const {addNewAdmin,login}=require('../controllers/adminController')


//creating a router
const adminRouter=Express.Router()

adminRouter.post('/add',addNewAdmin)
adminRouter.post('/login',login)



module.exports={adminRouter}