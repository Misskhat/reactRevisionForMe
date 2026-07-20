import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

function Products() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <p className="text-xl font-bold">All Products</p>
        <div className="space-x-2">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
