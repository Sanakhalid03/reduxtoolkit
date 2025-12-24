import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import productsReducer from "./productSlice"
import categoriesReducer from "./categoriesSlice"
import genderReducer from "./genderSlice"



const store =configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
        gender:genderReducer,
        
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;