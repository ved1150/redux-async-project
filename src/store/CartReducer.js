import { createSlice } from "@reduxjs/toolkit";
  
const cartData ={
    showCart : false,
    listOfProduct :[] ,
    productQuality : 1 ,
    cartEmpty : true 
}

const cartSlice = createSlice({
    name: "cart",
    initialState : cartData ,
    reducers : {
        togglecart(state){
            state.showCart = !state.showCart
        },
        addItemInList(state , action){
            state.listOfProduct.push(action.payload)
            state.cartEmpty = false
        },
        increaseProductQuality(state){
            state.productQuality = state.productQuality + 1
        },
        decreaseProductQuality(state){
            if(state.productQuality === 1) {
                state.cartEmpty = true
                state.listOfProduct = []
            }else{
                state.productQuality = state.productQuality - 1
            }
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer

