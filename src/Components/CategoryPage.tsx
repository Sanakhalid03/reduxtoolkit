
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { addItem, removeItem } from "../Redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../Redux/productSlice";
import { Link, useParams } from "react-router-dom";
import { AnimatedBackground } from "animated-backgrounds"
function CategoryPage() {
    const {slug}=useParams()
      const dispatch = useAppDispatch();
      useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);
      const productSelector = useAppSelector((state) => state.products.items);
      const cartSelector = useAppSelector((state) => state.cart.items);
      const filtered=productSelector.filter((p)=>p.category === slug)
      
  return (
    <div className="w-[95%] md:w-[90vw] lg:w-[90vw] md:flex md:gap-8 md:justify-center md:flex-wrap lg:flex lg:gap-8 lg:justify-center lg:flex-wrap  bg-white shadow-lg shadow-amber-900 mx-auto mt-5 md:p-10 lg:p-10">
       <AnimatedBackground animationName="starryNight"/>
      {filtered.length > 0 ? (
        filtered.map((product) => {
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
  );
  
}

export default CategoryPage