import { FaStar } from "react-icons/fa";
import CardImg from "../../public/Assets/image/cardImage.png";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      {/* card */}
      <div className="bg-white pt-8 px-2 border text-black rounded-md shadow-sm">
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
            <span className="ml-6 text-[#d52345]">$2323</span>
          </div>
          <button className="bg-[#d52345] cursor-pointer hover:bg-[#bd1634] w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white pt-8 px-2 border text-black rounded-md shadow-sm">
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
            <span className="ml-6 text-[#d52345]">$2323</span>
          </div>
          <button className="bg-[#d52345] cursor-pointer hover:bg-[#bd1634] w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white pt-8 px-2 border text-black rounded-md shadow-sm">
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
            <span className="ml-6 text-[#d52345]">$2323</span>
          </div>
          <button className="bg-[#d52345] cursor-pointer hover:bg-[#bd1634] w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white pt-8 px-2 border text-black rounded-md shadow-sm">
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
            <span className="ml-6 text-[#d52345]">$2323</span>
          </div>
          <button className="bg-[#d52345] cursor-pointer hover:bg-[#bd1634] w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white pt-8 px-2 border text-black rounded-md shadow-sm">
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
            <span className="ml-6 text-[#d52345]">$2323</span>
          </div>
          <button className="bg-[#d52345] cursor-pointer hover:bg-[#bd1634] w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white pt-8 px-2 border text-black rounded-md shadow-sm">
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
            <span className="ml-6 text-[#d52345]">$2323</span>
          </div>
          <button className="bg-[#d52345] cursor-pointer hover:bg-[#bd1634] w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
     
      
    </div>
  );
};

export default Products;
