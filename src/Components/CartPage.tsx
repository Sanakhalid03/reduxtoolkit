import { TfiShoppingCartFull } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { Link } from "react-router-dom";
import { removeItem } from "../Redux/slice";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function CartPage() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.cart.items);
  const TotalItems = useAppSelector((state) =>
    state.cart.items.reduce((t, p) => t + p.quantity, 0)
  );
  const TotalPrice = useAppSelector((state) =>
    state.cart.items.reduce((t, p) => t + p.quantity * p.price, 0)
  );
  return (
    <div className="w-[95%] flex flex-col items-center md:w-[90vw] lg:w-[90vw]   gap-8  md:flex-wrap  justify-center lg:flex-wrap  bg-white shadow-lg shadow-amber-900 mx-auto mt-5 p-10">
      <h2 className="text-3xl font-bold text-center">Your Cart Items</h2>

      {selector.length > 0 ? (
        <>
          {selector.map((product) => {
            return (
              <div
                key={product.id}
                className="w-[90%] lg:w-170 shadow-md shadow-amber-800 p-8  flex flex-col items-center justify-center md:flex-row md:justify-around  lg:flex-row  lg:justify-around gap-4 "
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-25"
                />
                <div className="md:w-50 lg:w-70 flex flex-col gap-2">
                  <h2 className="font-medium text-lg">{product.title}</h2>
                  <span>Quantity:{product.quantity}</span>
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <h2 className="font-medium">${product.price}</h2>
                  <IoIosRemoveCircleOutline
                    onClick={() => dispatch(removeItem(product))}
                    className="text-red-600 cursor-pointer font-medium text-xl"
                  />
                </div>
              </div>
            );
          })}
          <div className="flex flex-col gap-2 p-2">
            <h3 className="text-xl text-amber-900 font-bold text-center">
              Total Items: {TotalItems}{" "}
            </h3>
            <h3 className="text-xl text-amber-900 font-bold text-center">
              Total Price: {TotalPrice}{" "}
            </h3>
          </div>
          <Link
            to="/success"
            className="w-full text-lg md:text-2xl lg:text-2xl bg-amber-800 p-2 cursor-pointer transition duration-200 hover:bg-amber-700 font-medium md:w-70 lg:w-70 text-center text-white rounded-lg mt-2"
          >
            Place Order
          </Link>
        </>
      ) : (
        <div className="flex text-lg gap-2 justify-center items-center font-medium p-4 pt-8 md:text-2xl lg:text-2xl ">
          <span>Empty</span>
          <TfiShoppingCartFull className="text-2xl" />
          <Link to="/" className="text-amber-800">
            Add Products
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
