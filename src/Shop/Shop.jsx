import { useState } from "react";
import Filter from "./Filter";
import ShopBnner from "./ShopBnner";
import ProductJson from "./ProductJson";

const Shop = () => {
    const [filterValue , setFilterValue]=useState("")
  const handleGetFilterValue= (value) =>{
    setFilterValue(value)
    // console.log(value);
  }
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" "><ShopBnner /></div>
      <div className="max-w-6xl flex flex-col sm:flex-row mx-auto gap-4 mt-3">
        <div className="bg-amber-200 w-4/12">
          {" "}
          <Filter handleGetFilterValue= {handleGetFilterValue}/>
        </div>
        {/* cards design */}
        <div className=" w-full">
          {" "}
          {/* <Products /> */}
          <ProductJson  filterValue={filterValue} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
