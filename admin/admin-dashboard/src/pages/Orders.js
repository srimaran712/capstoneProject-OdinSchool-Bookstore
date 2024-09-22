import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Orders = () => {
  const [orders,setOrders]=useState([])

  const fetchOrders=async()=>{
    try{
      const response= await axios.get('https://backend-bookstore-gtxj.onrender.com/orders/data')
      console.log(response.data.Orders)
      setOrders(response.data.Orders)
    
    }catch(error){

    }
  }
  useEffect(()=>{
    fetchOrders()
  },[])
  return (
    <div className="mx-6 max-w-7xl">
      <div className="px-4 py-3 bg-light-brown w-64 rounded-lg mx-4 my-5">

<h3 className="text-white-color font-Poppins">Total Orders received</h3>
<h1 className="text-white-color font-Poppins font-bold text-4xl mx-10 mt-2 ">{orders.length}</h1></div>

{orders.map((order)=>{
  return(
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold">Order Information</h2>
      <p className="text-sm text-gray-600">Order Status: {order.orderStatus}</p>
      <p className="text-sm text-gray-600">Payment Status: {order.paymentStatus}</p>
      <p className="text-sm text-gray-600">Order Date: {new Date(order.createdAt).toLocaleString()}</p>
      <NavLink to={`/order/${order._id}`} className="text-sm px-2 py-1 mt-2 text-white-color bg-primary-color font-Roboto">update OrderStatus</NavLink>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Product Details</h3>
      {order.items.map((item, index) => (
        <div key={item._id} className="flex items-center space-x-4 mb-4">
          <img
            className="w-16 h-20 object-cover"
            src={item.product.image}
            alt={item.product.title}
          />
          <div>
            <h4 className="font-medium">{item.product.title}</h4>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Price: ₹{item.product.price}</p>
          </div>
        </div>
      ))}
      <div className="border-t pt-2 mt-2">
        <p className="text-lg font-semibold">Total Amount: ₹{order.totalAmount}</p>
      </div>
    </div>

    <div className="bg-gray-200 p-4">
      <h3 className="text-lg font-semibold">Customer Information</h3>
      <p className="text-sm text-gray-600">Name: {order.user.userName}</p>
      <p className="text-sm text-gray-600">Email: {order.user.email}</p>
      <p className="text-sm text-gray-600">Mobile: {order.user.mobile}</p>
      <p className="text-sm text-gray-600">Address: {order.user.address}, {order.user.city}</p>
    </div>
  </div>
  )
})}

    </div>
  )
}

export default Orders
