import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Product from "./Components/Product";
import CartPage from "./Components/CartPage";
import ProductPage from "./Components/ProductPage";
import Success from "./Components/Success";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
