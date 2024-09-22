import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
    const[categoryName,setCategoryName]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response =await axios.post('https://backend-bookstore-gtxj.onrender.com/api/category/add',{categoryName})
            setTimeout(()=>{
                setCategoryName('')
            },2000 )
            toast(response.data.message)
            
        }catch(error){
              console.log(error)
        }
    }
  return (
    <div className="mx-8 max-w-6xl">
    <div className="mx-10 py-4 px-2">
      <ToastContainer/>

      <form  onSubmit={handleSubmit} className="border border-grey-color mx-10 mt-5 max-w-4xl flex flex-col py-5 px-5">
          <div className="flex gap-20 flex-col">
              <div className="mt-2 mx-48">
                  <label htmlFor='bookTitle' className="font-Poppins ">Add New Category for the database</label><br/>
                  <input type="text" value={categoryName} onChange={(e)=> setCategoryName(e.target.value)} placeholder="add book category" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>

              </div>
              <div className="mt-2 ">
                <button type="submit" className="mx-48 bg-primary-color text-white-color font-Poppins tracking-wider px-8 py-2">create New Category</button>
            </div>
              
          </div>
          </form>
          </div>
          </div>
  )
}

export default AddCategory
