import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import LogIn from "./Log-in";
import SignUp from "./Sign-up";
//import Cart from "./Cart";
import NoPage from "./NoPage";
//import ProductDetails from "./ProductDetails";

export default function App() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="/:name" element={<ProductDetails />} />*/}
        </Route>
        {/*<Route path="/cart" element={<Cart />} />*/}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
