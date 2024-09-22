import React from 'react'
import axios from 'axios'
import {useState} from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
 

  const handleLogin=async(e)=>{
    e.preventDefault()

    try{
      const response =await axios.post('http://localhost:8080/api/user/login',{email,password})
      const {token,existEmail}= response.data
      
     
      localStorage.setItem('token',token)
      localStorage.setItem('user',JSON.stringify(existEmail))
      toast(response.data.message)
      
      
    }catch(error){
       console.log(error)
    }
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <ToastContainer/>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
