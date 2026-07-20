import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Error from "../pages/error/Error";
import WishList from "../pages/wishList/WishList";
import ProductDetails from "./../pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
