import { FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";


const ShopBnner = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className=" p-4 space-y-3">
        <div className="flex gap-2 justify-center items-center">
          <div className="bg-[#d62243]  p-2 rounded-full text-white">
            <FaShoppingCart />
          </div>
          <span className="text-3xl font-semibold text-[#c52542de]">Shop</span>
        </div>
        <p>
          Discover premium{" "}
          <span className="font-semibold text-[#d62243]">ornaments</span>
        </p>
        <div className="flex gap-1 justify-between">
          <button className="flex items-center gap-2 bg-gray-50 rounded-md py-2 px-4">
            <IoHomeOutline /> Home
          </button>

          <button className="flex items-center  gap-2 text-white bg-[#c52542d8] rounded-md py-2 px-4 font-semibold">
            <FaShoppingCart /> Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopBnner;
