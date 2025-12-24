import { LucideHeartHandshake } from "lucide-react";
import { FaIdCard } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

function Guarantee() {
  return (
    <div className="w-[95%] md:w-[80%] lg:w-[80%] h-190 md:h-100 lg:h-100 flex flex-col justify-center items-center mx-auto gap-8">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-4xl text-amber-900  md:mt-10 lg:mt-10"> Your Satisfaction Matters</h1>
    <div className="w-full h-[80%] flex flex-col items-center justify-center md:flex-row md:justify-around md:items-center lg:flex=row lg:justify-around lg:items-center gap-10 md:gap-5 lg:md-5 mx-auto">
       <div className="flex flex-col items-center  gap-3 text-center">
        <div className="w-20 h-20 text-amber-900 text-4xl bg-amber-400 p-2 rounded-full flex items-center justify-center"> <FaIdCard className="text-3xl w-[90%] h-[90%]"/></div>
        <h1 className="text-2xl font-semibold">Secure Payment</h1>
        <p className="text-gray-500 font-medium">100% safe and encrypted transactions</p>
       </div>
       <div className="flex flex-col items-center  gap-3 text-center">
       <div className="w-20 h-20 text-4xl text-amber-900 bg-amber-400 p-2 rounded-full flex items-center justify-center"><MdLocalShipping className="text-3xl w-[90%] h-[90%]"/></div> 
        <h1 className="text-2xl font-semibold">Free Shipping</h1>
        <p className="text-gray-500 font-medium">Fast & free delivery on all orders</p>
       </div>
       <div className="flex flex-col items-center  gap-3 text-center">
        <div className="w-20 h-20 text-4xl text-amber-900 bg-amber-400 p-2 rounded-full flex items-center justify-center"> <LucideHeartHandshake className="text-3xl w-[90%] h-[90%]"/></div> 
      
        <h1 className="text-2xl font-semibold">Excellent Service</h1>
         <p className="text-gray-500 font-medium">Friendly support whenever you need</p>
       </div>
     </div>
    </div>
  )
}

export default Guarantee