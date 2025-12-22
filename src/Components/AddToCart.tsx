import { GrCart } from "react-icons/gr";
import { useAppSelector } from "../Redux/Hooks";
import { Link } from "react-router-dom";

function AddToCart() {
  const Total = useAppSelector((state) =>
    state.cart.items.reduce((t, p) => t + p.quantity, 0)
  );
  return (
    <div className="flex relative">
      <Link to="/cart">
        {" "}
        <GrCart className="text-2xl font-bold cursor-pointer " />
      </Link>
      <span className="absolute -top-3 -right-3 bg-amber-900 text-white px-1 rounded-lg text-[0.7rem]">
        {Total}
      </span>
    </div>
  );
}

export default AddToCart;
