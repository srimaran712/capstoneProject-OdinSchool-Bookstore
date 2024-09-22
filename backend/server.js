//mongodb+srv://srimaran712:71ILqhYSFbmsK4od@cluster0.h865c.mongodb.net/

const Express=require('express')
const Cors=require('cors')


const bodyParser=require('body-parser')
require('dotenv').config()// processing the environment variables
const stripe=require('stripe')(process.env.STRIPE_KEY)
const {connectionDB}=require('./config/db')//database connection
const {BookRouter}=require('./routes/bookRoute')
const {CategoryRouter}=require('./routes/categoryRoute')

const {userRouter}=require('./routes/userRoute')
const {orderModel}=require('./models/orderModel')
const {userModel}=require('./models/userModel')
const {adminRouter}=require('./routes/adminRoute')


//time to create the server

const app=Express()


app.use(Cors({
    origin:'*',
}))
app.use(bodyParser.json())


//api endpoints
app.use('/api/books',BookRouter)
app.use('/api/category',CategoryRouter)

app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)

app.post('/create-checkout-session', async (req, res) => {

    const {items,user,totalPrice}=req.body
    console.log(user._id)
    const lineItems=items.map((item)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:item.title,
              


            },
            unit_amount:Math.round(item.price * 100)
        },
        quantity:item.quantity
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    })

    const order = new orderModel({
        user: user, 
        items:items.map((item) => ({
            product: item._id,
            quantity: Number(item.quantity),
            price: Number(item.price),
          })),
        totalAmount:Number(totalPrice),
        paymentStatus: 'completed',
        orderStatus:'order-received'
      });
      await order.save();

      const finduser = await userModel.findById(user._id);
        if (!finduser) {
            return res.status(404).json({ message: 'User not found' });
        }

        finduser.orders.push(order._id);
        await finduser.save();
     
  
    res.json({id:session.id})
})

///getting orders

app.get('/orders/data',async function(req,res){
    try{
        const orders= await orderModel.find().populate("user","userName email address city mobile").populate("items.product","title price image")
      
        console.log(orders)
        res.status(200).json({Orders:orders})
    }catch(error){
        res.status(400).json({message:'something went wrong'})
    }
 
})

///user orders

app.get('/orders/:users',async function(req,res){
   const id=req.params.users
   console.log(id)
   if(!id){
    res.status(400).json({message:'user id does not match'})
   }
   try{
    const OrderItems= await userModel.findById(id).populate({
        path:"orders",
        populate:{
            path:'items.product',
            select:'title price image'
        }
    })
    res.status(200).json({orderDetails:OrderItems})
   }catch(error){
    res.status(400).json({message:'something went wrong'})
   }
   
})

app.put('/order/:id',async function(req,res){
    const {selectedOption} =req.body
    console.log(selectedOption)
    const Id=req.params.id
    console.log(Id)

    try{
        const updatingId= await orderModel.findByIdAndUpdate(Id,{
           orderStatus:selectedOption ,
        
        },{new:true,runValidators:true})

        res.status(200).json({message:'updated successfully'})
    }catch(error){
        res.status(400).json({message:'something went wrong'})
    }

})
connectionDB()

app.listen(process.env.PORT,()=>{
    console.log('server connected')
})