import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

function Products() {
  const { products } = useProducts();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
