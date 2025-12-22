import { IoLogoReddit } from "react-icons/io";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between drop-shadow-lg shadow-amber-800  px-8 bg-amber-300 text-amber-900">
      <div className="flex flex-col items-center">
        <IoLogoReddit className=" font-bold text-3xl" />
        <h1 className="text-xl font-bold">MyShop</h1>
      </div>
      <div className="flex items-center justify-between gap-10">
        <ul className="flex gap-2 font-bold cursor-pointer ">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
        </ul>
        <AddToCart />
      </div>
    </header>
  );
}

export default Header;
