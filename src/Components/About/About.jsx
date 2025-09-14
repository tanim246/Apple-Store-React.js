import { BiStats } from "react-icons/bi";
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
      <div>
        <section className=" ">
          <div className="max-w-4xl mx-auto px-6 text-center">
            
            <p className="text-lg mb-8">
              Welcome to MobileHub, your ultimate destination for the latest
              smartphones and mobile accessories. We provide top-quality mobile
              products that combine innovation, style, and performance.
            </p>

            {/* Features / Mission */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                  Quality Products
                </h3>
                <p className="">
                  We source only the best mobile phones and accessories to
                  ensure superior quality for our customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                  Affordable Prices
                </h3>
                <p className="">
                  Get the latest smartphones and gadgets at prices that suit
                  your budget without compromising on quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                  Fast Delivery
                </h3>
                <p className="">
                  Enjoy quick and reliable delivery services across the country
                  for all your orders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
