import React from "react";

function WishList() {
  const products = JSON.parse(localStorage.getItem("wishList"));
  console.log(products);
  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl font-bold">
          Wish List
          <span className="text-sm text-gray-500 pl-1">
            ({products.length} product found)
          </span>
        </h2>
        <select name="sort" id="">
          <option value="nan">Sort by price</option>
        </select>
      </div>
      <div className="space-y-5 my-5">
        {products.map((product) => (
          <div className="flex items-center bg-base-100 border pr-2 rounded">
            <figure>
              <img src={product.image} alt="Shoes" className="h-38 rounded" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-xl font-bold">
                Product price: ${product.price}
              </p>
            </div>
            <div className="">
              <button className="btn btn-outline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
