import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const UserOrders = () => {
const navigate=useNavigate()
  const[orderItems,setOrderItems]=useState(null)
  const userdetails= localStorage.getItem('user')
 
  useEffect(()=>{
    if (!userdetails) {
      console.error('No user data found in localStorage');
      navigate('/login'); // Redirect to login if user data is missing
      return null; // Return early to prevent further execution
    }
  },[])
  
  const parsed_user= JSON.parse(userdetails)
  console.log(parsed_user._id)

  const fetchUserOrders=async()=>{
          try{
            const response = await axios.get(`http://localhost:8080/orders/${parsed_user._id}`)
            console.log(response.data.orderDetails)
            setOrderItems(response.data.orderDetails)
          }catch(error)  {
            console.log(error)
          }
  }

  useEffect(()=>{
    fetchUserOrders()
  },[])
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
    <h2 className="text-xl font-semibold mb-4">Order History</h2>

    {/* Check if userDetails and orders exist */}
    {orderItems && orderItems.orders && orderItems.orders.length > 0 ? (
      orderItems.orders.map((order, index) => (
        <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-bold mb-2">Order #{index + 1}</h3>
          <p><span className="font-bold">Order Status:</span> {order.orderStatus}</p>
          <p><span className="font-bold">Payment Status:</span> {order.paymentStatus}</p>
          <p><span className="font-bold">Total Amount:</span> ₹{order.totalAmount}</p>

          {/* Products in the Order */}
          <div className="mt-4">
            {order.items && order.items.map((item) => (
              <div key={item._id} className="flex items-center space-x-4 mb-4">
                <img src={item.product.image} alt={item.product.title} className="w-20 h-20 rounded-md" />
                <div>
                  <h4 className="text-md font-semibold">{item.product.title}</h4>
                  <p>Price: ₹{item.product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
    ) : (
      <p>No orders available.</p> // Fallback if no orders exist
    )}
  </div>
  )
}

export default UserOrders
