import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import '../App.css'

const Sidebar = () => {
  return (
    <div className="min-h-screen w-1/5 border border-grey-color border-t-0">
      <div className="pt-10 pl-20p flex flex-col gap-10 cursor-pointer">
        <NavLink to='/addBook'className="flex items-center gap-6 border border-grey-color border-r-0 py-2 px-4 tracking-wider  text-sm">
            <IoIosAddCircleOutline />
            <p className="font-Poppins">Add Books</p>
        </NavLink>
        <NavLink to='/listBooks' className="flex items-center gap-6 border border-grey-color border-r-0 py-2 px-4 tracking-wider  text-sm">
            <FaClipboardList/>
            <p className="font-Poppins">List Books</p>
        </NavLink>
        <NavLink to='/orders' className="flex items-center gap-6 border border-grey-color border-r-0 py-2 px-4 tracking-wider  text-sm">
           <FaCartFlatbed/>
           <p className="font-Poppins ">Orders</p>
        </NavLink>
        <NavLink to='/addCategory' className="flex items-center gap-6 border border-grey-color border-r-0 py-2 px-4 tracking-wider  text-sm">
        <IoIosAddCircleOutline />
           <p className="font-Poppins ">Add Category</p>
        </NavLink>
        <NavLink to='/signup' className="flex items-center gap-6 border border-grey-color border-r-0 py-2 px-4 tracking-wider  text-sm">
        <IoIosAddCircleOutline />
           <p className="font-Poppins ">Add Admin</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
