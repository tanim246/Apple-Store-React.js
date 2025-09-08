import React from "react";

const Nav = () => {
  //   const navItem = [{""}];
  return (
    <div className="bg-[#d52345]">
      <nav className="max-w-6xl mx-auto border-1 border-white ">
        <div className="navbar text-white shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              {/* mobile */}
              <ul
                tabIndex={0}
                className="menu menu-sm space-y-8 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded-full text-[16px]">
              <label for="cars">Categories</label>
              <select id="cars" className="text-black">
                <option  className="text-black" value="volvo">Volvo</option>
                <option  className="text-black" value="saab">Saab</option>
                <option  className="text-black" value="opel">Opel</option>
                <option  className="text-black" value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-[16px] menu-horizontal space-x-8 px-1">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
