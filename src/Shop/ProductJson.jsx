import React from "react";
import Products from "./Products";
import UseAxios from "../Hooks/UseAxios";

const ProductJson = () => {
  const { data, loading, error } = UseAxios("https://dummyjson.com/products/search?q=phone");
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log(data);
  return (
    <div  className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-1">
      {data?.products?.map((product) => (
        <Products key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductJson;
