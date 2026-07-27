import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function WishList() {
  const [wiseList, setWishList] = useState([]);
  const [sortedValue, setSortedValue] = useState(null);

  useEffect(() => {
    const saveProducts = JSON.parse(localStorage.getItem("wishList"));
    if (saveProducts) return setWishList(saveProducts);
  }, []);

  const sortByPrice = (() => {
    if (sortedValue === "lower") {
      const highValue = [...wiseList].sort((a, b) => a.price - b.price);
      return highValue;
    } else if (sortedValue === "higher") {
      const lowerValue = [...wiseList].sort((a, b) => b.price - a.price);
      return lowerValue;
    } else {
      return wiseList;
    }
  })();

  // remove from localstorage and update ui
  const handleRemove = (id) => {
    console.log(id);
    const existingWishList = JSON.parse(localStorage.getItem("wishList"));
    if (!existingWishList) {
      console.log("existingWishList not found");
      return;
    }
    let updateList = existingWishList.filter((p) => p.id != id);
    alert("Your wiseList product remove");
    setWishList(updateList);
    localStorage.setItem("wishList", JSON.stringify(updateList));
  };

  // generate chart data
  const totalsByCategory = {};
  wiseList.forEach((product) => {
    const category = product.category;
    totalsByCategory[category] =
      (totalsByCategory[category] || 0) + product.price;
  });
  const cartData = Object.keys(totalsByCategory).map((cat) => ({
    category: cat,
    total: totalsByCategory[cat],
  }));
  // console.log(cartData);
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
        {sortByPrice.map((product, i) => (
          <div
            key={i}
            className="flex items-center bg-base-100 border pr-2 rounded"
          >
            <figure>
              <img
                src={product.image}
                alt="Shoes"
                className="h-46 w-40 rounded"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-gray-700 font-semibold py-1 px-2 border-l-4 border-green-600">
                Category : {product.category}
              </p>
              <p>{product.description}</p>
              <p className="text-xl font-bold">
                Product price: ${product.price}
              </p>
            </div>
            <div className="">
              <button
                onClick={() => handleRemove(product.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rechart functionality */}
      <div>
        <h2>Wish List Cart Here: </h2>
        <div className="border-2 rounded-xl p-2 h-96">
          <BarChart
            style={{
              width: "100%",
              maxWidth: "",
              maxHeight: "380px",
              aspectRatio: 1.618,
            }}
            responsive
            data={cartData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="total"
              fill="#AF719D"
              activeBar={{ fill: "#A5D6A7", stroke: "#66BB6A" }}
              radius={[10, 10, 0, 0]}
            />

            {/* <RechartsDevtools /> */}
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default WishList;
