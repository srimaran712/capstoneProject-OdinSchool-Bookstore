const Mongoose =require('mongoose')




const orderSchema = new Mongoose.Schema({
    user: { type: Mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
      product: { type: Mongoose.Schema.Types.ObjectId, ref: 'books', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    orderStatus:{type:String, enum:['order-received','dispatched','out-for-delivery','delivered'],default:'order-received'}
  });
  

const orderModel= Mongoose.models.order|| Mongoose.model("order",orderSchema)
module.exports={orderModel}
