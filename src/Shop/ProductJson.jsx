import React, { useEffect, useState } from "react";
import Products from "./Products";
import UseAxios from "../Hooks/UseAxios";
import Loader from "../Components/Loaders/Loading";

const ProductJson = ({ filterValue }) => {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = UseAxios(
    "https://dummyjson.com/products/search?q=phone"
  );

  useEffect(() => {
    if (!data?.products) return;

    let sortedProducts = [...data.products];

    if (filterValue === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filterValue === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  }, [data, filterValue]);

  if (loading) {
    return (
      <div className="flex justify-center items-center  h-80">
        <Loader  />
      </div>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-1">
      {products.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductJson;
