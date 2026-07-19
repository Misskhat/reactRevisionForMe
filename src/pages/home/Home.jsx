import React from "react";
import useProducts from "../../hooks/useProducts";

function Home() {
  const data = useProducts();
  console.log(data);
  return <div>Home</div>;
}

export default Home;
