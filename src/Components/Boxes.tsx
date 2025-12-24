import { Link } from "react-router-dom"
import men from "../assets/men.jpg"
import women from "../assets/women.jpg"

function Boxes() {
  return (
    <div className="w-full h-190 md:h-150 lg:h-150 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-7">
        <Link to={"/gender/men"} className="w-[90%] h-[48%] md:w-100 lg:w-100 md:h-[90%] lg:h-[90%] shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-full cursor-pointer bg-top md:bg-center lg:bg-center bg-cover group transition duration-200 hover:scale-105" style={{backgroundImage:`url(${men})`}}>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[0.1rem] flex justify-center items-center">
                <h1 className="border-2 border-amber-900 text-white text-2xl text-center font-bold p-2 w-[80%]">Men</h1>
            </div> 
        </div>
        </Link>
     
        <Link to={"/gender/women"} className="w-[90%] h-[48%] md:w-100 lg:w-100 md:h-[90%] lg:h-[90%] shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-full cursor-pointer bg-top md:bg-center lg:bg-center bg-cover group transition duration-200 hover:scale-105" style={{backgroundImage:`url(${women})`}}>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-[0.1rem] flex justify-center items-center">
                <h1 className="border-2 border-amber-900 text-white text-2xl text-center font-bold p-2 w-[80%]">Women</h1>
            </div> 
        </div>
        </Link>
     
       
       
    </div>
  )
}

export default Boxes