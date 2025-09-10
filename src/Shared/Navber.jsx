
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Navber = () => {
  

  return (
    <div className="bg-white  ">
      <div className="flex  mt-4  sm:flex-row justify-between items-start sm:items-center max-w-6xl mx-auto py-2 px-4 sm:px-0">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#d52345]">Apple Store</h1>

        {/* Desktop Search */}
        <div className="relative w-full sm:w-[600px] hidden sm:block mt-2 sm:mt-0">
          <input
            type="text"
            className="border border-gray-300 px-4 pr-12 py-2 rounded-full w-full focus:outline-[#d62243] focus:outline-1"
            placeholder="Search..."
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#d62243] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            <MdOutlineSearch className="text-white w-5 h-5" />
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          {/* Mobile search button */}
          <button
            className="sm:hidden bg-[#d62243] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            // onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <MdOutlineSearch className="text-white w-5 h-5" />
          </button>

          {/* Contact info */}
          <div className="hidden sm:flex gap-2 items-center text-black text-[12px]">
            <TfiHeadphoneAlt className="w-8 h-8 p-1" />
            <div className="flex flex-col">
              <span>entry@gmail.com</span>
              <span>(5447 45 421 251)</span>
            </div>
          </div>

          {/* Action icons */}
          <FaRegUser className="text-xl cursor-pointer hover:text-[#d62243]" />
          <FaRegHeart className="text-xl cursor-pointer hover:text-[#d62243]" />
          <LuShoppingCart className="text-xl cursor-pointer hover:text-[#d62243]" />
        </div>
      </div>

      {/* Mobile search input */}
      
        <div className="px-4 sm:hidden mt-2">
          <input hidden
            type="text"
            className="border border-gray-300 px-4 pr-12 py-2 rounded-full w-full focus:outline-[#d62243] focus:outline-1"
            placeholder="Search..."
          />
        </div>
    
    </div>
  );
};

export default Navber;
