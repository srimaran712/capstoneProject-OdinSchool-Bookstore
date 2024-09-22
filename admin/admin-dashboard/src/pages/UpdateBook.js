import React from 'react'
import {useState} from 'react'
import {useNavigate ,useParams} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateBook = () => {
    const {id}=useParams()
    
    const navigate=useNavigate()
    const [title,setTitle]=useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [author,setAuthor] =useState('')
    const [image,setImage]=useState('')
    const [category,setCategory]=useState('')

    const updateBook=async(id)=>{
       try{
        const response= await axios.put(`http://localhost:8080/api/books/update/${id}`,{
            title,
            description,
            price,
            author,
            image,
            category

        })
        toast(response.data.message)
        navigate('/listBooks')
       }catch(error){
             console.log('error')
       }
    }


   
  return (
    <div className="mx-6 max-w-6xl">
      <div className="mx-8 py-4 px-2">
        <ToastContainer/>

        <form onSubmit={()=>updateBook(id)} className="border border-grey-color mx-10 mt-5 max-w-4xl flex flex-col py-5 px-5">
            <div className="flex gap-48">
                <div className="mt-2">
                    <label htmlFor='bookTitle' className="font-Poppins ">Update Title</label><br/>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}placeholder="update book title" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
                <div className="mt-2">
                    <label htmlFor='price' className="font-Poppins ">Update Price</label><br/>
                    <input type="text" value={price}onChange={(e)=>setPrice(e.target.value)}placeholder="update price" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
            </div>
            <div className="mt-5">
                <label htmlFor='description' className="font-Poppins ">Update Description</label><br/>
                <textarea  value={description} onChange={(e)=>setDescription(e.target.value)}placeholder='write description' className="py-10 border border-grey-color px-20p w-full mt-2 outline-none"></textarea>
            </div>
            <div className="flex gap-48 mt-5">
            <div className="mt-2">
                    <label htmlFor='author' className="font-Poppins">Update Author</label><br/>
                    <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}placeholder="update author" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
                <div className="mt-2">
                    <label htmlFor='category'>Update category</label><br/>
                    <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}placeholder="update category" className="border border-grey-color py-2 px-10 mt-2 outline-none"/>
                </div>
            </div>
            <div className="mt-5">
                <label htmlFor='image' className="font-Poppins">Update Cover</label><br/>
                <input type='url' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='update image' className="border border-grey-color py-2 px-10 mt-2 w-full outline-none"/>
            </div>
            <div className="mt-5 ">
                <button type="submit" className="mx-64 bg-green text-white-color font-Poppins tracking-wider px-8 py-2">update Book</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateBook
