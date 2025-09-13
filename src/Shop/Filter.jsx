import React from "react";
import { FaStar } from "react-icons/fa";

const Filter = () => {
  return (
    <div>
      <div className=" rounded-2xl space-y-4 p-6  bg-white ">
        <div className="flex items-center gap-2">
          <p className="bg-orange-500 p-3 rounded-md text-white">
            <FaStar />
          </p>
          <p className="font-semibold">Catagories</p>
        </div>
        <form>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input type="radio" name="radio-3"  />
              <span>All Price Products</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <span>Low to High</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="radio-3" />
              <span> High to Low</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
