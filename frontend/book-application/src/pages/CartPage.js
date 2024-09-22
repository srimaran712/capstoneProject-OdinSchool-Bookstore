import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeItem} from '../redux'
import { NavLink } from 'react-router-dom'


const CartPage = () => {
const dispatch=useDispatch()
    const cartitems= useSelector((state)=>{
        return state.cart
    })
    console.log(cartitems)


    const handledelete=(id)=>{
       dispatch(removeItem(id))
    }
  return (
    <div className="mx-2  md:mx-5 py-4 mt-2">
    {cartitems.cartItems.length>0?  <div className="mx-2 md:mx-5 py-4 mt-2">
        <div className="flex md:gap-5"><h2 className="font-Montserrat font-medium text-xl">Total Quantity :{cartitems.totalQuantity}</h2>
        <h2 className="font-medium font-Montserrat text-xl">Total Price of the items :₹ {cartitems.totalPrice}</h2>
        </div>
        {cartitems.cartItems.map((items)=>{
          return(
        
            <div className=" bg-white shadow-md gap-3 md:px-4 py-2 m-3 w-full flex border border-grey-color items-center justify-between md:gap-5" key={items._id}>
                <img src={items.image} alt={items.title} className="md:w-28 h-32"></img>
               <div> <h3 className="font-Montserrat font-medium text-md ">{items.title}</h3></div>
               <div> <h4 className="font-Roboto font-medium text-sm">₹ {items.price}</h4></div>
               <div> <h4 className="font-Roboto font-medium text-sm" >Quantity: {items.quantity}</h4></div>
                <div>
                <button className="bg-orange-500 text-white font-Roboto py-2 px-4 rounded-lg" onClick={()=>handledelete(items._id)}>Remove Item</button>
                </div>
            </div>
          )
        })}
        <NavLink to='/checkout' className="font-Poppins text-md bg-primary-color py-2 px-4 tracking-wider text-white border-none ml-10 mt-4">Proceed to Payment</NavLink>
      </div>:<h1> Your cart is empty</h1>}
    
    </div>
  )
}

export default CartPage
