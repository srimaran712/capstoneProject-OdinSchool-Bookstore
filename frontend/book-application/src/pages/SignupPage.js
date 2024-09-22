import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
    const [username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [pin,setPin]=useState('')
    const [mobile,setMobile]=useState('')
    const navigate=useNavigate()
   
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response= await axios.post('http://localhost:8080/api/user/add',{username,email,password,address,city,pin,mobile})
            toast(response.data.message)
            setTimeout(()=>{
        
             navigate('/login')
            },2000)
        }catch(error){

        }
    }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
         <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign up</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e)=>setUserName(e.target.value)}
               
                placeholder="Enter your username" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required 
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               
               
                placeholder="Enter your email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required 
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
               
            
                placeholder="Enter your password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required 
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
              <input 
                type="text" 
               
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              
                placeholder="Enter your address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
               
              />
            </div>

            {/* City */}
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">City</label>
              <input 
                type="text" 
                value={city}
                onChange={(e)=>setCity(e.target.value)}
               
                placeholder="Enter your city" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required 
              />
            </div>

            {/* Pin Code */}
            <div className="mb-4">
              <label htmlFor="pin" className="block text-gray-700 font-semibold mb-2">Pin Code</label>
              <input 
                type="text" 
             
               value={pin}
               onChange={(e)=>setPin(e.target.value)}
                placeholder="Enter your pin code" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required 
              />
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile</label>
              <input 
                type="text" 
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
          
                
                placeholder="Enter your mobile number" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required 
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
