import React from 'react'
import {useState,useEffect} from 'react'
import { useParams,NavLink } from 'react-router-dom'
import axios from 'axios'
const BookPage = () => {
    const [books,setBooks]=useState([])
    const [individualBook,setIndividualBook]=useState({})
    const {id}=useParams()

    const fetchOne= async()=>{
        try{
            const response=await axios.get('http://localhost:8080/api/books/data')
            setBooks(response.data.bookdetails)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchOne()
    },[])
useEffect(()=>{
    
})
useEffect(() => {
    if (books.length > 0) {
      const filteredBook = books.find((item) => item._id === id);
      if (filteredBook) {
        setIndividualBook(filteredBook);
      } else {
        console.log('Book not found');
      }
    }
  }, [books, id]);
  return (
    <div className="mx-2 md:mx-5 px-2 py-4 bg-white">
      {individualBook ? (
        <>
       
       <div className="flex flex-col mx-2 mt-2 md:flex-row gap-10 items-center">
       <img src={individualBook.image} alt={individualBook.title} className="w-64 h-80 my-4" />
       <p className="text-gray-600 text-md tracking-wide font-Poppins">{individualBook.description}</p>
        </div> 
          <h1 className="text-2xl font-bold">{individualBook.title}</h1>
          <p className="text-gray-600 mt-2">Author: {individualBook.author}</p>
          <p className="text-gray-700 font-medium">Price: ₹ {individualBook.price}</p>
          <div className="mt-5"> <NavLink to='/' className="md:mt-2 py-2 px-4 font-medium text-medium bg-primary-color text-white">Back to Home</NavLink></div>
         
          
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  )
}

export default BookPage
