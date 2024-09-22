import React from 'react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux'
import axios from 'axios'


const Book = ({filteredbooks}) => {
 
const dispatch=useDispatch()
 const addCart=(id)=>{
  const cartBook= filteredbooks.find((item)=>item._id===id)
  if(cartBook){
    dispatch(addToCart(cartBook))
  }
 }
 
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mx-5 mt-4 md:gap-10">
    
      {filteredbooks.map((item)=>{
        return(
            <div key={item._id} className="px-2 py-1  md:py-2 md:px-2 md:border-none bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

              
                <img src={item.image} alt={item.title} className="w-64 h-80 mx-6 my-2"/>
                <div className="px-4 py-3">
              <h2 className="font-bold text-gray-800 text-lg truncate">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.author}</p>
              <p className="text-gray-700 text-md font-medium mt-2">
                $ {item.price}
              </p>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <NavLink
                to={`/book/${item._id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                View
              </NavLink>

              <button className="bg-gray-100 rounded-3xl p-2 text-2xl hover:text-primary-color" onClick={()=>addCart(item._id)}><CiShoppingCart/></button>
            </div>
                </div>
        )
      })}
    </div>
  )
}

export default Book
