import React  from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import {NavLink} from 'react-router-dom'


const Success = () => {
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
      <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
      <h1 className="text-2xl font-bold text-gray-800 mt-6">Payment Successful</h1>
      <p className="text-gray-600 mt-4">
        Thank you for your payment. Your transaction was successful and your order has been confirmed.
      </p>
      <div className="mt-6">
        <NavLink
          to="/"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Go to Home
        </NavLink>
      </div>
      
    </div>
  </div>
  )
};

export default Success;