import React from "react";
import { Route, Routes } from "react-router-dom";
import  Navbar  from "../Component/Navbar/navbar";
import Home from "../Homepage/homepage"
import Product from "../Product/productPage"
import Cart from "../Cart/cartPage" 
import Wishlist from "../Wishlist/wishlistPage"

const Router = () => {
    return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/wishlist" element={<Wishlist />} /> 
        </Routes>
    </div>
    );
};

export default Router;
