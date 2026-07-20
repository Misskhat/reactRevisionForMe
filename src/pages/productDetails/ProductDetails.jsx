import React, { cacheSignal } from "react";
import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";

function ProductDetails() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const product = products.find((product) => product.id === Number(id));

  if (loading) {
    return (
      <span>
        L<span className="animate-spin"> 🎯 </span>ading
      </span>
    );
  }

  //try to save data in localstorage
  const handleProductsStore = () => {
    const existingProducts = JSON.parse(localStorage.getItem("wishList"));
    if (existingProducts === null) {
      localStorage.setItem("wishList", JSON.stringify(product));
    } else {
      localStorage.setItem(
        "WishList",
        JSON.stringify({ ...existingProducts, product }),
      );
    }
  };

  const {
    category,
    description,
    dimensions,
    image,
    material,
    name,
    price,
    stock,
  } = product || {};
  return (
    <div>
      <div className="min-h-screen py-10">
        <div className="flex lg:flex-row gap-5 ">
          <div className="relative">
            <img src={image} className="w-96 rounded-lg shadow-2xl" />
            <span className="absolute top-3 left-3 rounded bg-amber-50 text-amber-800 font-bold px-2 py-1 opacity-60">
              {category}
            </span>
          </div>
          <div className=" pb-10">
            <div className="space-y-1">
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="text-xl">Product Description: {description}</p>
              <p className="text-xl">Product Dimensions: {dimensions}</p>
              <p className="text-xl">Made of material: {material}</p>
              <div className="flex gap-3.5 py-5 text-xl">
                <span>Price ${price}</span>
                <span>
                  {stock ? (
                    <span className="border-b rounded py-1 animate-pulse text-green-600 font-bold">
                      Available
                    </span>
                  ) : (
                    <span>Not Available</span>
                  )}
                </span>
              </div>
            </div>
            <button onClick={handleProductsStore} className="btn btn-outline">
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
