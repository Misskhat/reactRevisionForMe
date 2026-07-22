import React from "react";
import { NavLink } from "react-router";

const navList = (
  <>
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/products"}>Products</NavLink>
    </li>
    <li>
      <NavLink to={"/wishList"}>WishList</NavLink>
    </li>
  </>
);

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start -translate-x-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <NavLink
          to={"/"}
          className="text-2xl font-bold border-b-2 border-gray-600 hover:border-amber-400 transition-all duration-300"
        >
          HomeDeco
        </NavLink>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1  hidden lg:flex">{navList}</ul>
        <NavLink to={""} className="btn">
          Visit Store
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
