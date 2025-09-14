import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import logo from "../../public/favIcon.png";
import { Link } from "react-router";
const Navber = () => {
  return (
    <div className="bg-white  ">
      <div className="flex  mt-4 max-w-6xl mx-auto  sm:flex-row justify-between items-start sm:items-center  py-2 px-4 sm:px-0">
        {/* Logo */}
        {/* <img src={logo} className="text-3xl font-bold text-orange-500"/> */}

        <div className="flex items-center gap-2">
          {" "}
          <img src={logo} alt="logo" className="w-[35px]" />
          <Link to="/home" className="text-orange-500 text-xl font-semibold mobify">
            Mobify
          </Link>
        </div>
        {/* Desktop Search */}
        <div className="relative w-full sm:w-[600px] hidden sm:block mt-2 sm:mt-0">
          <input
            type="text"
            className="border border-gray-300 px-4 pr-12 py-2 rounded-full w-full focus:outline-orange-500 focus:outline-1"
            placeholder="Search..."
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            <MdOutlineSearch className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          {/* Mobile search button */}
          <button
            className="sm:hidden bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            // onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <MdOutlineSearch className="text-white w-5 h-5" />
          </button>

          {/* Contact info */}
          <div className="hidden sm:flex gap-2 items-center text-black text-[12px]">
            <TfiHeadphoneAlt className="w-8 h-8 p-1" />
            <div className="flex flex-col">
              <span>mobify@gmail.com</span>
              <span>(445 22 232 444)</span>
            </div>
          </div>

          {/* Action icons */}
          <FaRegUser className="text-xl cursor-pointer hover:text-orange-500" />
          <FaRegHeart className="text-xl cursor-pointer hover:text-orange-500" />
          <span className="relative">
            <LuShoppingCart className="text-xl cursor-pointer hover:text-orange-500" />
            <p className="absolute animate-bounce top-[-10px] right-[-10px] bg-orange-500 flex justify-center items-center  rounded-full text-white w-5 h-5 ">
              0
            </p>
          </span>
        </div>
      </div>

      {/* Mobile search input */}

      <div className="px-4 sm:hidden mt-2">
        <input
          hidden
          type="text"
          className="border border-gray-300 px-4 pr-12 py-2 rounded-full w-full focus:outline-[#d62243] focus:outline-1"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Navber;
