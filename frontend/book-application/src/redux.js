import {configureStore,createSlice}  from '@reduxjs/toolkit'



const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalQuantity:0,
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{

           const items=action.payload
           const existingItem= state.cartItems.find((item)=>item._id===items._id)
           if(existingItem){
            existingItem.quantity+=1
          
           }else{
            state.cartItems.push({...items,quantity:1})
           }
         
          state.totalQuantity+=1
          state.totalPrice+=items.price
        },
        removeItem:(state,action)=>{
            const itemId = action.payload;
            const existingItem= state.cartItems.find((items)=>items._id===itemId)

            if (existingItem) {
                if (existingItem.quantity > 1) {
                  // Decrease quantity if more than 1
                  existingItem.quantity -= 1;
                  state.totalQuantity -= 1;
                  state.totalPrice -= existingItem.price;
                } else {
                  // If only 1 item, remove it from the cart
                  state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
                  state.totalQuantity -= 1;
                  state.totalPrice -= existingItem.price;
                }
              }

     

 }
    
    }

    
})
export const {addToCart,removeItem}=cartSlice.actions

export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})