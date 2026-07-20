import React from "react";
import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((product) => product.id === Number(id));

  return <div>ProductDetails</div>;
}

export default ProductDetails;
