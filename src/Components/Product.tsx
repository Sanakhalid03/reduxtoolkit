import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { addItem, removeItem } from "../Redux/slice";
import { useEffect, useMemo } from "react";
import { fetchProducts } from "../Redux/productSlice";
import { Link } from "react-router-dom";
function Product() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productSelector = useAppSelector((state) => state.products.items);
  const cartSelector = useAppSelector((state) => state.cart.items);
  const random= useMemo(()=>{
    return [...productSelector].sort(()=>0.5 - Math.random()).slice(0,20)
  },[productSelector])

  return (
    <div className="w-[95%] md:w-[90vw] lg:w-[90vw]  bg-white shadow-lg shadow-amber-900 mx-auto mt-5 py-10 md:p-10 lg:p-10">
     <h1 className="text-center text-amber-900 text-4xl font-bold ">Our Latest Products</h1>
    <div className="w-full md:w-full lg-w-full md:flex md:gap-8 md:justify-center md:flex-wrap lg:flex lg:gap-8 lg:justify-center lg:flex-wrap  mt-8">
    
      {random.length > 0 ? (
          random.map((product) => {
          return (
            
            <div
              key={product.id}
              className="flex flex-col items-center p-5 w-full md:w-[30vw] lg:w-[19vw] gap-1 rounded-md  shadow-lg shadow-amber-800 mt-5 transition cursor-pointer duration-200 hover:shadow-2xl "
            >

              <Link to={`/productpage/${product.id} `}>
                {" "}
                <img src={product.thumbnail} alt="" className="w-50 h-60 " />
              </Link>
              <div className="flex flex-col items-center gap-4 ">
                <h1 className="text-2xl font-semibold mt-2 ">
                  {product.title.length > 18
                    ? product.title.slice(0, 18) + "..."
                    : product.title}
                </h1>
                <p className="font-medium text-lg text-amber-500">
                  ${product.price}
                </p>
              </div>
              {cartSelector.find((item) => item.id === product.id) ? (
                <div className="flex gap-2 items-center justify-center  w-full">
                  <button
                    onClick={() => dispatch(addItem(product))}
                    className="text-lg md:text-2xl lg:text-2xl bg-amber-800 p-2 cursor-pointer transition duration-200 hover:bg-amber-700 font-medium w-[60%] text-white rounded-lg mt-4"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(product))}
                    className="text-lg md:text-2xl lg:text-2xl bg-red-800 p-2 cursor-pointer transition duration-200 hover:bg-red-700 font-medium w-[60%] text-white rounded-lg mt-4"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="text-lg md:text-2xl lg:text-2xl bg-amber-800 p-2 cursor-pointer transition duration-200 hover:bg-amber-700 font-medium w-full text-white rounded-lg mt-4"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })
      ) : (
        <p className=" mt-4 text-2xl font-bold text-center">Products Not Found</p>
      )}
    </div>
 </div> );
}

export default Product;
