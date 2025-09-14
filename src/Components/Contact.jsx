import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoCall, IoHomeOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link } from "react-router";
const Contact = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className=" p-4 space-y-3">
        <div className="flex gap-2 justify-center items-center">
          <div className="bg-orange-500  p-2 rounded-full text-white">
            <FaShoppingCart />
          </div>
          <span className="text-3xl font-semibold text-orange-600">
            Contact
          </span>
        </div>
        <p className="text-center">
          <span className="font-semibold text-orange-600">Apple Store</span>{" "}
          Have questions about our premium ornaments? We'd love to hear <br />{" "}
          from you. Get in touch and let's create something beautiful together.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/home"
            className="flex items-center gap-2 hover:bg-orange-100 border border-orange-600  rounded-md py-2 px-4"
          >
            <MdHome />
            Home
          </Link>

          <Link
            to="/contact"
            className="flex items-center  gap-2 text-white bg-orange-500 rounded-md py-2 px-4 font-semibold"
          >
            <IoCall />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
