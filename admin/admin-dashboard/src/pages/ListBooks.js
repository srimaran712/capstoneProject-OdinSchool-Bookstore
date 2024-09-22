import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom'


const ListBooks = () => {
    
    const[books,setBooks]=useState([])

    const fetchBooks=async()=>{
        try{
            const response=await axios.get('http://localhost:8080/api/books/data')
            console.log(response.data.bookdetails)
            setBooks(response.data.bookdetails)
        }catch(error){
            console.log(error)
            toast(error)
        }
        
    }

    useEffect(()=>{
        fetchBooks()
    },[])

    const handleDelete=async (id)=>{
  
       try{
        const response= await axios.delete(`http://localhost:8080/api/books/delete/${id}`)
        toast(response.data.message)
       }catch(error){
         toast(error)
       }
       
    }
  return (
    <div className="mx-6 max-w-7xl">
     <ToastContainer/>
     <div className="px-4 py-3 bg-primary-color w-64 rounded-lg mx-4 my-5">

        <h3 className="text-white-color font-Poppins">Total Books Created</h3>
        <h1 className="text-white-color font-Poppins font-bold text-4xl mx-10 mt-2 ">{books.length}</h1>
     </div>
     <h2 className="font-Poppins font-bold text-grey-color mx-5">all Book Details</h2>
     <div className="mx-5 mt-5 w-full">
        <table  className='px-10 border-collapse border border-grey-color w-full mx-5'>
            <thead className="px-3 py-2">
                <th className="border border-grey-color px-5 py-1">S.no</th>
                <th className="border border-grey-color px-5 py-1">Book Cover</th>
                <th className="border border-grey-color px-5 py-1">Book Title</th>
                <th className="border border-grey-color px-5 py-1" >Book Price</th>
                <th className="border border-grey-color px-5 py-1" >Book Author</th>
                <th className="border border-grey-color px-5 py-1">Category</th>
                <th className="border border-grey-color px-5 py-1">Edit</th>
                <th className="border border-grey-color px-5 py-1">Delete</th>
            </thead>
            <tbody className='px-3 py-2'>
               {books.map((book,index)=>{
                return(
                    <tr className="py-5 px-5" key={book._id}>
                       <td className="border border-grey-color px-5 py-2">{index+1}</td>
                       <td className="border border-grey-color px-5 py-2"><img src={book.image} alt={book.title} style={{width:"50px",height:"50px"}}/></td>
                       <td className="border border-grey-color px-5 py-2">{book.title}</td>
                       <td className="border border-grey-color px-5 py-2">$ {book.price}</td>
                       <td className="border border-grey-color px-5 py-2">{book.author}</td>
                       <td className="border border-grey-color px-5 py-2">{book.category}</td>
                       <td className="border border-grey-color px-5 py-2"> <NavLink className="py-1 px-3 bg-green text-white-color text-md font-Poppins" to={`/update/${book._id}`}>Edit</NavLink></td>
                       <td className="border border-grey-color px-5 py-2"><button className="py-1 px-3 bg-orange text-white-color" onClick={()=>handleDelete(book._id)}>Remove</button></td>
                    </tr>
                )
               })}
            </tbody>
        </table>
     </div>
    </div>
  )
}

export default ListBooks
