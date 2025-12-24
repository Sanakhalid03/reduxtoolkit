import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  warrantyInformation: string;
  category:string,
  quantity: number;
}
interface productState {
  items: product[];
  status: "idle" | "succeeded";
  error: string | null;
}
const initialState: productState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchGenderProducts = createAsyncThunk<product[], "men" | "women">(
  "products",
  async (type: "men" | "women") => {
    const menCategory=[
        "mens-shirts", "mens-shoes", "mens-watches"
    ]
    const womenCategory=[
        "womens-dresses", "womens-shoes", "womens-watches"
    ]
    const categories= type === "men" ? menCategory : womenCategory
    const request= categories.map((cate)=>{
      
        return(
          
        fetch(`https://dummyjson.com/products/category/${cate}`).then((res)=>res.json())
        
        )
        
    })
    
    const response=await Promise.all(request)
    return response.flatMap(r=>r.products)
  
  }
);

const genderSlice = createSlice({
  name: "genderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     builder.addCase(fetchGenderProducts.pending, (state) => {
          state.status = "idle";
        });
    builder.addCase(fetchGenderProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
        builder.addCase(fetchGenderProducts.rejected, (state, action) => {
          state.status = "idle";
          state.error = action.error.message || "Failed to Fetch";
        });
  },
});
export default genderSlice.reducer;
