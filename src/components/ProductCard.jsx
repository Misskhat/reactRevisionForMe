import React from "react";
import { Link } from "react-router";

function ProductCard({ product }) {
  const { name, image, price, description, id } = product;
  return (
    <div className="card bg-base-100 hover:scale-105 shadow-sm transition-transform duration-300 ease-in-out">
      <figure>
        <img src={image} alt={name} className="w-full h-72 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p className="font-bold py-2">Product price: ${price}</p>
          <Link to={`/product/${id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
