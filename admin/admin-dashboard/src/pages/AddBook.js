import React from 'react'
import {useState,useEffect} from 'react'

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
    const[bookTitle,setBookTitle]=useState('')
    const [bookDescription,setBookDescription]=useState('')
    const [price,setPrice]=useState('')
    const [author,setAuthor]=useState('')
    const [image,setImage]=useState('')
    const [category,setCategory]=useState('')
    const [listCategory,setListCategory]=useState([])

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const response= await axios.post('http://localhost:8080/api/books/add',{bookTitle,bookDescription,price,author,image,category})
        try{
             toast(response.data.message)
             setTimeout(()=>{
                setBookTitle('')
                setBookDescription('')
                setPrice('')
                setImage('')
                setCategory('')
                setAuthor('')
             },2000)
        }catch(error){
           console.log(error)
        }
    }
    const fetchCategory=async()=>{
        try{
            const response= await axios.get('http://localhost:8080/api/category/data')
            setListCategory(response.data.category)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchCategory()
    },[])
  return (
    <div className="mx-6 max-w-6xl">
      <div className="mx-8 py-4 px-2">
        <ToastContainer/>

        <form onSubmit={handleSubmit} className="border border-grey-color mx-10 mt-5 max-w-4xl flex flex-col py-5 px-5">
            <div className="flex gap-48">
                <div className="mt-2">
                    <label htmlFor='bookTitle' className="font-Poppins ">Title of the Book</label><br/>
                    <input type="text" value={bookTitle} onChange={(e)=> setBookTitle(e.target.value)}placeholder="add book title" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
                <div className="mt-2">
                    <label htmlFor='price' className="font-Poppins ">Price of the Book</label><br/>
                    <input type="text" value={price}onChange={(e)=>setPrice(e.target.value)}placeholder="add price" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
            </div>
            <div className="mt-5">
                <label htmlFor='description' className="font-Poppins ">Description of the Book</label><br/>
                <textarea  value={bookDescription} onChange={(e)=>setBookDescription(e.target.value)}placeholder='write description' className="py-10 border border-grey-color px-20p w-full mt-2 outline-none"></textarea>
            </div>
            <div className="flex gap-48 mt-5">
            <div className="mt-2">
                    <label htmlFor='author' className="font-Poppins">Author of the Book</label><br/>
                    <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}placeholder="add author" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
                <div className="mt-2">
                    <label htmlFor='category'>Category of the Book</label><br/>
                    
                    <select type="text" value={category} onChange={(e)=>setCategory(e.target.value)}placeholder="add category" className="border border-grey-color py-2 px-10 mt-2 outline-none">
                    <option value="" disabled>Select Category</option>
                        {listCategory.map((items)=>{
                            return(
                                <option key={items._id} value={items.name}>{items.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="mt-5">
                <label htmlFor='image' className="font-Poppins">Add Cover</label><br/>
                <input type='url' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='add image' className="border border-grey-color py-2 px-10 mt-2 w-full outline-none"/>
            </div>
            <div className="mt-5 ">
                <button type="submit" className="mx-64 bg-primary-color text-white-color font-Poppins tracking-wider px-8 py-2">add New Book</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook
