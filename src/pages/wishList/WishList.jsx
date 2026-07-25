import React, { useEffect, useState } from "react";

function WishList() {
  const [wiseList, setWishList] = useState([]);
  const [sortedValue, setSortedValue] = useState(null);

  useEffect(() => {
    const saveProducts = JSON.parse(localStorage.getItem("wishList"));
    if (saveProducts) return setWishList(saveProducts);
  }, []);

  const sortByPrice = () => {
    if (sortedValue === "lower") {
      const highValue = [...wiseList].sort((a, b) => a.price - b.price);
      return highValue;
    } else if (sortedValue === "higher") {
      const lowerValue = [...wiseList].sort((a, b) => b.price - a.price);
      return lowerValue;
    } else {
      return wiseList;
    }
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">
          Wish List
          <span className="text-sm text-gray-500 pl-1">
            ({wiseList.length} product found)
          </span>
        </h2>
        <select
          value={sortedValue}
          onChange={(e) => setSortedValue(e.target.value)}
          name="sort"
          className="border-2 rounded"
        >
          <option value="">Sort by price</option>
          <option value="higher">Higher price</option>
          <option value="lower">Lower Pirce</option>
        </select>
      </div>
      <div className="space-y-5 my-5">
        {sortByPrice().map((product) => (
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
