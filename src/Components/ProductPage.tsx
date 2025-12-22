import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { addItem, removeItem } from "../Redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../Redux/productSlice";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useAppSelector((state) => state.products.items);
  console.log(productSelector);
  const cartSelector = useAppSelector((state) => state.cart.items);
  const product = productSelector.find((item) => item.id === Number(id));
  const cartProduct = cartSelector.find((item) => item.id === product?.id);

  return (
    <div className="w-[95%] md:w-[90vw] lg:w-[90vw] md:flex md:gap-8 md:justify-center md:flex-wrap lg:flex lg:gap-8 lg:justify-center lg:flex-wrap  bg-white shadow-lg shadow-amber-900 mx-auto mt-5 md:p-10 lg:p-10">
      {product ? (
        <div className="flex flex-col md:justify-center lg:justify-center   p-5 px-10 w-full lg:w-[70%] md:gap-6 lg:gap-6 rounded-md md:flex-row lg:flex-row shadow-lg shadow-amber-800 mt-5 transition cursor-pointer duration-200 hover:shadow-2xl ">
          <img
            src={product.thumbnail}
            alt=""
            className="w-full h-60 md:w-80 md:h-120 lg:w-100 lg:h-120 object-contain "
          />
          <div className="flex flex-col items-center justify-center  px-4">
            <div className="flex flex-col items-center  gap-4  mt-4">
              <h1 className="text-2xl font-bold mt-2 ">{product.title}</h1>
              <p>{product.description}</p>
              <p className="font-bold">
                Quantity: {cartProduct ? cartProduct.quantity : 0}
              </p>
              <p className="font-bold">
                Warranty: {product.warrantyInformation}
              </p>

              <p className="font-medium text-lg text-amber-500">
                ${product.price}
              </p>
            </div>
            {cartProduct ? (
              <div className="flex gap-2 items-center justify-center  w-full ">
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="text-2xl bg-amber-800 p-2 cursor-pointer transition duration-200 hover:bg-amber-700 font-medium w-[60%] text-white rounded-lg mt-4"
                >
                  Add
                </button>
                <button
                  onClick={() => dispatch(removeItem(product))}
                  className="text-2xl bg-red-800 p-2 cursor-pointer transition duration-200 hover:bg-red-700 font-medium w-[60%] text-white rounded-lg mt-4"
                >
                  Remove
                </button>
              </div>
            ) : (
              <button
                onClick={() => dispatch(addItem(product))}
                className="text-2xl bg-amber-800 p-2 cursor-pointer transition duration-200 hover:bg-amber-700 font-medium w-[60%] text-white rounded-lg mt-4"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className=" mt-4 text-2xl font-bold">Product Not Found</p>
      )}
    </div>
  );
}

export default ProductPage;
