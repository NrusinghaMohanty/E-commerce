import React from 'react';
import "./header.css";
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <>
        <div className="containerr">
            <div className="header-containter">
                <div className="header-column">
                    <h1>Lorem ipsum dolor sit amet consectetur <br />adipisicing.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, consequatur. <br />Optio obcaecati nemo reprehenderit labore!</p>
                    <a  className="btn"><NavLink to="/product">Explore Now &#8594;</NavLink></a>
                </div>
                <div className="header-column x">
                    <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1621642130/fashion%20images/pngaaa.com-726077_uyydd9.png" />
                </div>
            </div>
          </div>  
        </>
    )
}

export default Header;
