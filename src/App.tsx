import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import CartPage from "./Components/CartPage";
import ProductPage from "./Components/ProductPage";
import Success from "./Components/Success";
import CategoryPage from "./Components/CategoryPage";
import Home from "./Components/Home";
import "./App.css"
import GenderPage from "./Components/GenderPage";
import Allproducts from "./Components/Allproducts";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/gender/:type" element={<GenderPage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/explore" element={<Allproducts/>} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
