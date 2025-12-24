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

export const fetchProducts = createAsyncThunk<product[]>(
  "products",
  async () => {
    const response = await fetch("https://dummyjson.com/products?limit=0");
    const jsonResp = await response.json();
    return jsonResp.products;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     builder.addCase(fetchProducts.pending, (state) => {
          state.status = "idle";
        });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.status = "idle";
          state.error = action.error.message || "Failed to Fetch";
        });
  },
});
export default productSlice.reducer;
