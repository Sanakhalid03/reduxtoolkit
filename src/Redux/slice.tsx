import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface product{
    id:number,
    title:string,
    price:number,
    thumbnail:string,
    quantity:number
}
interface productState{
    items:product[],
}
const storedCart= localStorage.getItem("cart")
const initialState:productState={
    items: storedCart ? JSON.parse(storedCart):[],
  
}

const addToCart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<product>)=>{
          const existingProducts=state.items.find(product=>product.id === action.payload.id)
          if(existingProducts){
            existingProducts.quantity += 1
          }
          else{
              state.items.push({...action.payload, quantity: 1})
          }
        
          localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeItem:(state,action:PayloadAction<product>)=>{
             const existingProducts=state.items.find(product=>product.id === action.payload.id)
             if(existingProducts){
          if(existingProducts.quantity > 1){
            existingProducts.quantity -= 1
          }else{
           state.items=state.items.filter(item=>item.id !== action.payload.id)
          }}
     
      localStorage.setItem("cart",JSON.stringify(state.items))
        
      },
    
    }
})
export const {addItem,removeItem}=addToCart.actions;
export default addToCart.reducer