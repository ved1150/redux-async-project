import { createSlice } from "@reduxjs/toolkit";
  
const cartData ={
    showCart : false 
}

const cartSlice = createSlice({
    name: "cart",
    initialState : cartData ,
    reducers : {
        togglecart(state){
            state.showCart = !state.showCart
        }
    }
})


export const cartBtnActions = cartSlice.actions
export default cartSlice.reducer

