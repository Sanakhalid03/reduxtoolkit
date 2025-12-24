
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/Hooks";
import { useEffect } from "react";
import { fetchCategories } from "../Redux/categoriesSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"



function Header() {
  const dispatch=useAppDispatch()
  const categories=useAppSelector((state)=>state.categories.items)
  useEffect(()=>{
    dispatch(fetchCategories())
  },[dispatch])
  return (
    <header className="flex h-20 items-center justify-between drop-shadow-lg shadow-amber-800  px-8 bg-amber-300 text-amber-900">
     
      <div className="w-full flex items-center justify-between">
        <div>
         <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <GiHamburgerMenu className="text-2xl cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60 side bg-amber-100 p-2">
                <DropdownMenuLabel className="font-bold text-amber-900">Select Category</DropdownMenuLabel>
                <DropdownMenuSeparator className="border-amber-900 border"/>
                  {
          categories.map((category)=>(
                <DropdownMenuItem  key={category.slug} className=" cursor-pointer" >
                  <Link to={`/category/${category.slug}`} className=" w-full h-full p-1 font-medium">{category.name} </Link>
                </DropdownMenuItem>
          ))}
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
       
        <Link to={"/"} className="text-xl md:text-2xl lg:text-3xl font-bold">MyShop</Link>
        <AddToCart />
      </div>
    </header>
  );
}

export default Header;
