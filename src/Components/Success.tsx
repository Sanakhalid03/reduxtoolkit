import { MdDoneOutline } from "react-icons/md";

function Success() {
  return (
    <>
      <div className="w-[95%] md:w-[90vw] lg:w-[90vw] md:flex md:gap-8 md:justify-center md:flex-wrap lg:flex lg:gap-8 lg:justify-center lg:flex-wrap  bg-white shadow-lg shadow-amber-900 mx-auto mt-5 md:p-10 lg:p-10">
        <div className="flex text-lg gap-2 justify-center items-center font-medium p-4 pt-8 md:text-2xl lg:text-2xl ">
          <MdDoneOutline className="text-green-600" />
          <span>Order Placed Successfully</span>
        </div>
      </div>
    </>
  );
}

export default Success;
