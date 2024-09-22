import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Book from './Book'


const Books = () => {
    const [books,setBooks]=useState([])
    const [category,setCategory]=useState([])
    const [filterBooks,setFilterBooks]=useState([])

    const fetchAll=async()=>{
      try{
        const resbook= await axios.get('https://backend-bookstore-gtxj.onrender.com/api/books/data')
        setBooks(resbook.data.bookdetails)
        setFilterBooks(resbook.data.bookdetails)
        const rescategory= await axios.get('https://backend-bookstore-gtxj.onrender.com/api/category/data')
        setCategory(rescategory.data.category)
      }catch(error){
        console.log(error)
      }
    }

    useEffect(()=>{
      fetchAll()
    },[])

    const handleChange= (e)=>{
      const selectedBook=e.target.value
      if(selectedBook){
      const filteredb=  books.filter((c)=>c.category===selectedBook)
      setFilterBooks(filteredb)
      console.log(filterBooks)
      }
      else{
        setFilterBooks(books)
      }
    }
  return (
    <div className="md:mx-2 px-2 py-2 mt-2">
      <div className="md:mx-4 mt-2 px-2 ">
        <select  onChange={handleChange} className="md:py-2 px-10  outline-none font-Poppins rounded-lg ">
           <option value=''>find your books by category</option>
           {category.map((items)=>{
            return(
              <option key={items._id} value={items.name}>{items.name}</option>
            )
           })}
        </select>
      </div>
      <Book filteredbooks={filterBooks}/>
    </div>
  )
}

export default Books

