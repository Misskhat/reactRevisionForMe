import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

function Products() {
  const { products } = useProducts();
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <p className="text-xl font-bold">All Products</p>
        <div className="space-x-2">
          <label htmlFor="search" className="font-bold">
            Search
          </label>
          <input
            className="border rounded px-2 py-1"
            type="text"
            name="search"
            id="search"
          />
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
