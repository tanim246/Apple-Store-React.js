import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoCall, IoHomeOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { Link } from "react-router";
const Contact = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex justify-center items-center p-6">
        <div className="p-4 space-y-3 text-center">
          <div className="flex gap-2 justify-center items-center">
            <div className="bg-orange-500 p-2 rounded-full text-white">
              <FaShoppingCart />
            </div>
            <span className="text-3xl font-semibold text-orange-600">
              Contact
            </span>
          </div>
          <p>
            <span className="font-semibold text-orange-600">Mobify</span>{" "}
            Have questions about our premium ornaments? We'd love to hear from
            you. <br /> Get in touch and let's create something beautiful together.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/home"
              className="flex items-center gap-2 hover:bg-orange-100 border border-orange-600 rounded-md py-2 px-4"
            >
              <MdHome /> Home
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-white bg-orange-500 rounded-md py-2 px-4 font-semibold"
            >
              <IoCall /> Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="relative max-w-6xl mx-auto z-10 overflow-hidden py-20 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:justify-between">
            {/* Left part */}
            <div className="w-full lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-orange-600">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark">Our Location</h4>
                  <p className="text-base text-gray-600">
                   07 No Chadnigat UP, Moulvibazar,Moulvbazar Sadar -3200
                  </p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark">Phone Number</h4>
                  <p className="text-base text-gray-600">
                    (+88)01 728 236 255
                  </p>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark">Email Address</h4>
                  <p className="text-base text-gray-600 ">mobify@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right part Form */}
            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full mb-4 rounded border border-gray-300 p-3 focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full mb-4 rounded border border-gray-300 p-3 focus:border-orange-500 focus:outline-none"
                  />
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    className="w-full mb-4 rounded border border-gray-300 p-3 focus:border-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded cursor-pointer bg-orange-600 py-3 px-6 text-white font-semibold hover:bg-orange-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
