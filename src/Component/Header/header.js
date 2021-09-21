import React from 'react';
import "./header.css";
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <>
        <div className="containerr">
            <div className="header-containter">
                <div className="header-column">
                    <h1>An exciting place for the whole family <br />to shop.</h1>
                    <p>Menswear Founded on Fit, Built on Service, and Focused on Style. However You Fit, Bonobos Fits You.</p>
                    <a href="/" className="btn"><NavLink to="/product" className="explore-btn">Explore Now &#8594;</NavLink></a>
                </div>
                <div className="header-column x">
                    <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1632248499/pngaaa.com-3824046_jdj5py.png" alt="Error loading" />
                </div>
            </div>
          </div>  
        </>
    )
}

export default Header;
