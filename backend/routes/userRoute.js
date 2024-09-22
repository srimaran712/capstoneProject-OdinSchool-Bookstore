const Express =require('express')
const {createNewUser,loginUser}=require('../controllers/userController')
const {authenticateJWT}=require('../middlewares/auth')


const userRouter=Express.Router()


userRouter.post('/add',createNewUser)
userRouter.post('/login',loginUser)





module.exports={userRouter}