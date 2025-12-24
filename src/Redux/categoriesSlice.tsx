import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface itemsType{
  name:string,
  slug:string,
}
interface categoryState {
  items: itemsType[];
  status: "idle" | "succeeded";
  error: string | null;
}
const initialState:categoryState= {
  items: [],
  status: "idle",
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories",
  async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const jsonResp = await response.json();
    return jsonResp;
  }
);


const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "idle";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.error.message || "Failed to Fetch";
    });
  },
});

export default categoriesSlice.reducer;

