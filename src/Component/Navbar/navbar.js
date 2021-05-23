import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Header from "../Header/header";
import {useCart} from "../../Context/cartContext"
import {useWishlist} from "../../Context/wishlistContext"

const Navbar = () => {
const {itemIncart} = useCart()
const {itemInwishlist} = useWishlist()

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>CODE-MART</h1>
                </div>
                <div className="menu">
                    <span>
                        <NavLink to="/" className="nav-link" end activeStyle={{color:"#fff",fontWeight:"bold"}}>
                            Home<i class="fas fa-home"></i>
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to="/product" className="nav-link" end activeStyle={{color:"#fff",fontWeight:"bold"}}>
                            Product<i class="fas fa-store"></i>
                        </NavLink>
                    </span>
                    <span className="nav-icon">
                        <NavLink to="/cart" className="nav-link"end activeStyle={{color:"#fff",fontWeight:"bold"}}>
                            Cart<i className="fas fa-shopping-cart "></i>
                        </NavLink>
                        <span className="icon-badge">{itemIncart.length}</span>
                    </span>
                    <span className="nav-icon">
                        <NavLink to="/wishlist" className="nav-link" end activeStyle={{color:"#fff",fontWeight:"bold"}}>
                            Wishlist<i class="fas fa-shopping-bag"></i>
                        </NavLink>
                        <span className="icon-badge">{itemInwishlist.length}</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Navbar;
