import { FaStar } from "react-icons/fa";
import CardImg from "../../public/Assets/image/cardImage.png";
import ProductJson from "./ProductJson";

const Products = ({ product }) => {
  // console.log(product);
  return (
    <div>
      {/* card */}
      <div className="bg-white shadow-sm pt-8 px-2  text-black pb-4 ">
        <img src={product?.thumbnail} alt="card img" className="w-[200px] mx-auto" />

        <div className="space-y-2 m-3 mt-4">
          <p className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="font-semibold text-xl">{product?.title}</p>
          <div className="text-[16px]">
            <span className="line-through">$00.00</span>
            <span className="ml-6 text-orange-600 font-semibold">
              ${product.price}
            </span>
          </div>
          <button className="flex-grow bg-orange-500 cursor-pointer hover:bg-orange-600 w-full p-2 text-white rounded-sm">
            Add to cart
          </button>
        </div>
      </div>
      {/* <div><ProductJson /></div> */}
    </div>
  );
};

export default Products;
