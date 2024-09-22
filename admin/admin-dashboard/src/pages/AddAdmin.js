import React, { useState } from 'react';
import axios from 'axios'

const AdminAddForm = () => {
  const [adminname,setAdminName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response =await axios.post('http://localhost:8080/api/admin/add',{adminname,email,password})
        console.log(response.data.message)
    }catch(error){
        console.log(error)
    }
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ml-10">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md ml-20"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Admin</h2>
        
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={adminname}
            onChange={(e)=>setAdminName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter name"
            required
          />
        </div>
        
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter email"
            required
          />
        </div>
        
        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
            required
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Add Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddForm;