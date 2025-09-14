import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";

const Range = () => {
  return (
    <div>
      <div className=" space-y-4 p-6  bg-white shadow ">
        <div className="flex items-center gap-2">
          <p className="bg-orange-500 p-3 rounded-md text-white">
            <IoMdPricetags />
          </p>
          <p className="font-semibold text-[16px]">Price Range</p>
        </div>
        <form>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input
                type="range"
                className="range text-orange-500 [--range-bg:orange] [--range-thumb:while (condition) {
                    
                }] [--range-fill:0]"
              />
            </div>
            <div className="flex justify-between">
              <span className="text-xs">$0</span>
              <span className="text-xs">$5k</span>
            </div>
            <ul className="flex flex-wrap gap-2">
                <li className=" border border-gray-300  rounded-md px-6 py-1">$100</li>
                <li className=" border border-gray-300  rounded-md px-6 py-1">$100</li>
                <li className=" border border-gray-300  rounded-md px-6 py-1">$100</li>
                <li className=" border border-gray-300  rounded-md px-6 py-1">$100</li>
               
                
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Range;
