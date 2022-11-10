import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
const store = configureStore({
    reducer:{
        toggleCartBtn : CartReducer
    }
})

export default store  