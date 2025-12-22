import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  warrantyInformation: string;
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
    const response = await fetch("https://dummyjson.com/products");
    const jsonResp = await response.json();
    return jsonResp.products;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
  },
});
export default productSlice.reducer;
