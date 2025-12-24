
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom"

function Hero() {
  return (
    
    
    <div className="w-full h-110 md:h-150 lg:h-150 flex items-center justify-center">
        
        <div className="w-[90%] md:w-160 lg:w-160 flex flex-col gap-5 items-center justify-center h-[80%]">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-amber-600 text-center ">Welcome To MyShop</h1>
            <p className="text-2xl md:text-3xl lg:text-3xl text-amber-900 font-semibold">Shop the Latest Trends</p>
            <Link to={"/explore"} className="flex flex-row gap-2 justify-center items-center text-lg  md:text-2xl lg:text-2xl bg-amber-800  py-4 cursor-pointer transition duration-300 border-2 border-transparent hover:bg-transparent hover:border-amber-900 hover:text-amber-800 font-medium w-40 md:w-60 lg:w-60 text-white rounded-lg mt-4"><span>Explore </span><HiArrowNarrowRight  className="text-xl font-medium pt-1"/></Link>
        </div>
    </div>
  )
}

export default Hero