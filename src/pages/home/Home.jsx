import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router";

function Home() {
  const { products, error, loading } = useProducts();
  const featureProducts = products.slice(0, 6);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">Home Page</h2>
      <div className="flex items-center justify-between py-5">
        <p className="text-xl font-bold">Feature Products</p>
        <Link to={"/products"} className="btn btn-outline">
          See More Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
        {featureProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
