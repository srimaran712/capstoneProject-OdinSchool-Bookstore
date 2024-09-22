import React from 'react'
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';


const CheckoutPage = () => {
  const {cartItems,totalPrice}=useSelector((state)=> state.cart)
  console.log(cartItems)
  console.log(totalPrice)
  const userId= localStorage.getItem('user')
  console.log(userId)
  const userParse= JSON.parse(userId)

  const handlePayment = async (e) => {
    e.preventDefault()
    const stripe = await  loadStripe('pk_test_51Q0QCwLT5cht0q1OhMRtOc6Qo8qOcrss56T3X0szhO7uaQwqa30CXUA8YrpZC8iS142Z9tiRkh8dRIEJ2D5XkxMC00oAtRRd7n');

    const body={
      items:cartItems,
      user:userParse,
      totalPrice:totalPrice,
    }

    const headers={
      "content-type":"application/json"
    }
    const response= await fetch('https://backend-bookstore-gtxj.onrender.com/create-checkout-session',{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })

    const session= await response.json()
   const result= stripe.redirectToCheckout({
    sessionId:session.id
   })
   if(result.error){
    console.log(result.error)
   }
  };
  return (
    <div className="py-6 bg-gray-50 mt-6 mx-auto max-w-4xl md:py-8 px-4">
      <h1 className="text-xl md:text-2xl text-gray-800 font-bold font-Montserrat mb-6">Checkout</h1>

      <h2 className="text-lg md:text-xl font-Poppins font-semibold text-gray-700 mb-4">Cart Summary</h2>

      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
                <div>
                <img src={item.image} alt={item.title} style={{width:"48px",height:"48px"}}/>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">Price: <span className="font-semibold">${item.price}</span></p>
                  <p className="text-sm text-gray-600">Quantity: <span className="font-semibold">{item.quantity}</span></p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Total Amount:</h3>
            <span className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-center mt-6">Your cart is empty</p>
      )}

      <div className="mt-8 flex justify-center">
        <button onClick={handlePayment} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
