import { FaShoppingCart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link } from "react-router";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-6">
        <div className=" p-4 space-y-3">
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-orange-500  p-2 rounded-full text-white">
              <FaShoppingCart />
            </div>
            <span className="text-3xl font-semibold text-orange-600">
              About Us
            </span>
          </div>
          <p>
            Discover premium{" "}
            <span className="font-semibold text-orange-600">ornaments</span>
          </p>
          <div className="flex gap-1 justify-between">
            <Link
              to="/home"
              className="flex items-center gap-2 hover:bg-orange-100 border border-orange-600  rounded-md py-2 px-4"
            >
              <MdHome />
              Home
            </Link>

            <Link
              to="/about"
              className="flex items-center  gap-2 text-white bg-orange-500 rounded-md py-2 px-4 font-semibold"
            >
              <FaShoppingCart />
              About
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
