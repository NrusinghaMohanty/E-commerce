import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Homepage/homepage"
import Product from "../Product/productPage"
import Cart from "../Cart/cartPage" 
import Wishlist from "../Wishlist/wishlistPage"
import Footer from "../Component/Footer/footer";
import Navbar from "../Component/Navbar/navbar";

const Router = () => {
    return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/wishlist" element={<Wishlist />} /> 
            <Route path="/footer" element={<Footer />} />
        </Routes>
    </div>
    );
};

export default Router;
