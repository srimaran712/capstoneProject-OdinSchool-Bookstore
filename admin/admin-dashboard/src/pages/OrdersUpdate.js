import React from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const OrdersUpdate = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const {id}=useParams()
    console.log(id)

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            const response =await axios.put(`http://localhost:8080/order/${id}`,{selectedOption})
            console.log(response.data.message)
            toast(response.data.message)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer/>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-semibold mb-4">Simple Form</h2>

      {/* Select Field */}
      <div className="mb-4">
        <label htmlFor="options" className="block text-gray-700 font-medium mb-2">
          Choose an Option
        </label>
        <select
          id="options"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select an option</option>
          <option value="order-received">order-received</option>
          <option value="dispatched">dispatched</option>
          <option value="out-for-delivery">out-for-delivery</option>
          <option value="delivered">delivered</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default OrdersUpdate
