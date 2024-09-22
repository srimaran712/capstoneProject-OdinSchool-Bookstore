import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate()
  const handleLogout=(e)=>{
     e.preventDefault()
     localStorage.removeItem('admin')
     navigate('/login')
  }
  return (
    <div className="mx-5 sm:mx-[4%] py-4 my-2  flex items-center justify-between border-b border-grey-color">
      <h2 className="text-primary-color font-Poppins font-bold text-xl tracking-wide py-1">GrowthMind.</h2>
      <div className="flex items-center space-x-10"><NavLink to='/sales' className="py-1 text-font-color font-Poppins text-sm tracking-wider border-b border-primary-color ">sales Report</NavLink>
      <p className="py-1 text-font-color font-Poppins text-sm tracking-wider border-b border-primary-color ">IT support</p>
      </div>
      
      <button className="bg-primary-color font-Poppins text-sm border-none py-1 px-6 rounded-xl text-white-color tracking-wide" onClick={handleLogout}>sign Out</button>
    </div>
  )
}

export default Navbar
