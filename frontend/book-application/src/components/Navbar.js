import React from 'react'
import {useState,useEffect} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import axios from 'axios'


const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [isLogin,setIsLogin]=useState(false)
    const [username, setUsername] = useState('');
    const navigate=useNavigate()
    const [books,setBooks]=useState([])
    const [item,setItem]=useState('')

    const fetchbooks= async()=>{
       try{
        const response =await axios.get('https://backend-bookstore-gtxj.onrender.com/api/books/data')
        setBooks(response.data.bookdetails)
       }catch(error){
        console.log(error)
       }
    }
    useEffect(()=>{
      fetchbooks()
    },[])

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(item)
     try{
      const findBook= books.find((items)=>items.title===item)
      navigate(`/book/${findBook._id}`)
      setTimeout(()=>{
        setItem('')
      },2000)
     } catch(error){
      console.log(error)
     }
    
    }

    useEffect(()=>{
      const token=localStorage.getItem('token')
      const User=localStorage.getItem('user')
      if(token && User){
        setIsLogin(true)
        try {
          const parsedUser = JSON.parse(User);
          setUsername(parsedUser.userName || ''); // Adjust if the key is different
        } catch (error) {
          console.error('Error parsing user from localStorage', error);
        }
      }else{
        setIsLogin(false)
      }
    },[])
  return (
    <div className="bg-white py-3 px-4 gap-4 md:mx-5 flex items-center justify-between rounded-lg">
    {/* Logo */}
    <div>
      <h1 className="text-md md:text-xl text-primary-color font-Poppins tracking-wider font-extrabold">
        GrowthMind.
      </h1>
    </div>

    {/* Search Bar */}
    <form onSubmit={handleSubmit} className="flex px-2 py-1 w-48 md:flex  md:px-1 md:w-full max-w-xs border border-grey-color rounded-xl justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-1 w-full outline-none"
        onChange={(e)=>setItem(e.target.value)}
        value={item}
      />
      <button type="submit" className="px-2 text-gray-500">
        <CiSearch />
      </button>
    </form>

    {/* Hamburger Menu Button for Mobile */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-primary-color focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>
    </div>

    {/* Navbar Links */}
    <nav className={`md:flex md:items-center space-x-10 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <NavLink className="flex items-center gap-2 py-2 hover:text-primary-color" to="/">
        <CiHome className="text-lg" /> <span>Home</span>
      </NavLink>
      <NavLink className="flex items-center gap-2 py-2 hover:text-primary-color" to="/cart">
        <CiShoppingCart className="text-lg" /> <span>Cart</span>
      </NavLink>
      <NavLink className="flex items-center gap-2 py-2 hover:text-primary-color" to="/orders">
        <BsBag className="text-lg" /> <span>Orders</span>
      </NavLink>
      
    </nav>

    {/* Login Button */}
    <div className={`hidden md:block`}>
      {isLogin?<div className="flex items-center gap-2">
        <h4 className="font-Roboto">Hi! {username}</h4>
        <button onClick={(e)=>{
          e.preventDefault()
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          setIsLogin(false)
          setUsername('');
        }} className="text-white bg-primary-color py-1 px-4 font-Roboto rounded-xl">logout</button>
      </div>:<NavLink
        to="/login"
        className="bg-primary-color text-white font-Roboto tracking-wide py-1 px-6 text-md rounded-2xl hover:bg-primary-dark"
      >
        Login
      </NavLink>}
      
    </div>

    {/* Mobile Menu (for small screens) */}
    {isOpen && (
      <div className="md:hidden mt-4">
        <NavLink
          to="/"
          className="block py-2 px-4 text-gray-700 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className="block py-2 px-4 text-gray-700 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Cart
        </NavLink>
        <NavLink
          to="/orders"
          className="block py-2 px-4 text-gray-700 hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Orders
        </NavLink>
       

        <NavLink
          to="/login"
          className="block py-2 px-4 text-white bg-primary-color hover:bg-primary-dark rounded-md mt-2"
          onClick={() => setIsOpen(false)}
        >
          Login
        </NavLink>
        
      </div>
    )}
  </div>
  )
}

export default Navbar
