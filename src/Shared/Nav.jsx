import React from "react";
import { Link } from "react-router";

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
      name: "Products",
      path: "/products",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-[#ffd7e3] ">
      <nav className="max-w-6xl mx-auto ">
        <div className="navbar text-white">
          {/* left side */}
          <div className="navbar-start">
            {/* mobile menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className=" ml-2 mr-4  cursor-pointer lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
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
                className="menu menu-sm space-y-4 dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {navItem?.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* categories dropdown */}
            <div className="dropdown  dropdown-hover ">
              <div
                // tabIndex={0}
                // role="button"
                className="bg-white px-4 py-2 rounded-full text-black text-[16px] font-medium cursor-pointer"
              >
                Categories
              </div>
            </div>
          </div>

          {/* center menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-[16px] menu-horizontal text-black space-x-8 px-1">
              {navItem?.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <div>
              <label className="toggle bg-white text-base-content">
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
