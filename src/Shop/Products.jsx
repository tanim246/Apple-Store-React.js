import { FaStar } from "react-icons/fa";
import CardImg from "../../public/Assets/image/cardImage.png";

const Products = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-1">
      {/* card */}
      <div className="bg-white shadow-sm pt-8 px-2  text-black ">
        <img src={CardImg} alt="card img" className="w-[200px] mx-auto" />
        {/* card content */}
        <div className="space-y-2 m-3 mt-4">
          <p className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="font-semibold text-xl">product title</p>
          <div className="text-[16px]">
            <span className="line-through">$1140</span>
            <span className="ml-6 text-orange-600 font-semibold">$2323</span>
          </div>
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
