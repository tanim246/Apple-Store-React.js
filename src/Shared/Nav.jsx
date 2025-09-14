import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from "react-router";
import logo from "../../public/favIcon.png";
const Nav = () => {
  const navItem = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className=" ">
      <nav className="max-w-6xl mx-auto ">
        <div className="navbar text-white">
          {/* left side */}
          <div className="navbar-start">
            {/* mobile menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className=" mr-4  cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-6 ml-3 sm:ml-0 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {/* mobile menu items */}
              <ul
                tabIndex={0}
                className="menu menu-sm px-6 flex  justify-center  space-y-4 dropdown-content bg-base-100 text-black rounded-box w-72 h-120   p-2 shadow"
              >
                {/* logo part */}
                <div className="flex justify-left mt-4 mb-6">
                  <div className="flex items-center gap-2">
                    {" "}
                    <img src={logo} alt="logo" className="w-[35px]" />
                    <Link
                      to="/home"
                      className=" text-orange-500 text-xl font-semibold mobify"
                    >
                      Mobify
                    </Link>
                  </div>
                </div>

                {navItem?.map((item, index) => (
                  <li
                    key={index}
                    className="flex p-1 flex-col hover:text-orange-500 "
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
                {/* nav contant */}
                <div className="flex flex-col gap-3 ">
                  <span className="flex  items-center  bg-orange-100 border rounded-md w-60 border-orange-300 space-x-3 py-4  px-8">
                    {" "}
                    <MdOutgoingMail className="text-2xl  " />
                    <span className="cursor-pointer hover:underline hover:text-orange-600">
                      mobify@gmail.com
                    </span>
                  </span>
                  <span className="flex  items-center bg-orange-100 border rounded-md w-60 border-orange-300 space-x-3 py-4  px-8">
                    <IoMdCall className="text-2xl  " />
                    <span className="cursor-pointer hover:underline hover:text-orange-600">
                      {" "}
                      +8801728236255
                    </span>
                  </span>
                </div>
              </ul>
            </div>
            w-19
            {/* categories dropdown */}
            <div className="dropdown  dropdown-hover ">
              {/* <div
                // tabIndex={0}
                // role="button"
                className=" px-4 py-2 rounded-md bg-orange-500 text-white text-[16px] font-medium cursor-pointer"
              >
                Categories
              </div> */}
            </div>
          </div>

          {/* center menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-[16px] menu-horizontal text-black space-x-6 px-1">
              {navItem?.map((item, index) => (
                <li key={index} className="hover:text-orange-500">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <div>
              <label className="toggle  text-base-content">
                <input
                  type="checkbox"
                  value="synthwave"
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
