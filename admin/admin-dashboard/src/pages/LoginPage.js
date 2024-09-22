import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleLogin=async(e)=>{
        e.preventDefault()
        try{
            const response =await axios.post('https://backend-bookstore-gtxj.onrender.com/api/admin/login',{email,password})
            const {adminToken} =response.data
          
            localStorage.setItem('admin',adminToken)
            navigate('/addBook')
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ml-40">
    <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg ml-20">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter email"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter password"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </form>
  </div>
  )
}

export default LoginPage
