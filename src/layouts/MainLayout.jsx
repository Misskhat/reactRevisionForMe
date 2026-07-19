import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="min-w-11/12 mx-auto translate-x-3">
        <Navbar />
      </nav>
      <main className="flex-1 max-w-11/12 mx-auto">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
