import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSort } from "react-icons/fa";

const Filter = ({ handleGetFilterValue }) => {
  const { register, watch } = useForm();
  const selectedFilter = watch("sortBy");
  useEffect(() => {
    handleGetFilterValue(selectedFilter);
  }, [selectedFilter, handleGetFilterValue]);

  return (
    <div>
      <div className=" space-y-4 p-6  bg-white shadow ">
        <div className="flex items-center gap-2">
          <p className="bg-orange-500 p-3 rounded-md text-white">
           <FaSort />

          </p>
          <p className="font-semibold text-[16px]">Sort By</p>
        </div>
        <form>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input type="radio" value="" />
              <span>All Price Products</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("sortBy")} value="lowToHigh" type="radio" />
              <span>Price: Low to High</span>
            </div>
            <div className="flex items-center gap-2">
              <input {...register("sortBy")} value="highToLow" type="radio" />
              <span>Price: High to Low</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
