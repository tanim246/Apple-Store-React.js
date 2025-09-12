import React from "react";
import Filter from "./Filter";
import Products from "./Products";
import ShopBnner from "./ShopBnner";

const Shop = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" "><ShopBnner /></div>
      <div className="max-w-6xl flex flex-col sm:flex-row mx-auto gap-4 mt-3">
        <div className="bg-amber-200 w-4/12">
          {" "}
          <Filter />
        </div>
        {/* cards design */}
        <div className=" w-full">
          {" "}
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Shop;
