import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Navber = () => {
  return (
    <div>
      <div className="flex px-4 sm:px-0 justify-between items-center  max-w-6xl mx-auto border py-2 mt-2 ">
        {/* navber-start */}
        <div className="flex items-center gap-16">
          <h1 className="text-3xl font-bold text-[#d52345]">E N T R Y.</h1>
          <div className="relative w-[600px] hidden sm:block">
            <input
              type="text"
              className="border-gray-400 border px-4 pr-12 rounded-full w-full py-2 focus:outline-[#d62243] focus:outline-1"
              placeholder="Search..."
            />

            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#d62243] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
              <MdOutlineSearch className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
        {/* naver-end */}
        <div className="flex gap-10">
          <div className="flex  gap-2 items-center hidden sm:flex  ">
            <span>
              <TfiHeadphoneAlt className=" text-black w-8 h-8 p-1 " />
            </span>
            <div className="flex flex-col text-black text-[12px]">
              <span>entry@gmail.com</span>
              <span>(5447 45 421 251)</span>
            </div>
          </div>
          <div className="flex space-x-3 items-center ">
            <button className=" sm:hidden bg-[#d62243] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
              <MdOutlineSearch className="text-white w-5 h-5" />
            </button>
            <span className=" w-8 h-8 p-1 text-black flex justify-center items-center ">
              <FaRegUser className="hover:text-[#d62243] text-xl cursor-pointer" />
            </span>
            <span className=" w-8 h-8 p-1 text-black flex justify-center items-center ">
              <FaRegHeart className="hover:text-[#d62243] text-xl cursor-pointer" />
            </span>
            <span className=" w-8 h-8 p-1 text-black flex justify-center items-center ">
              <LuShoppingCart className="hover:text-[#d62243] text-xl cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
