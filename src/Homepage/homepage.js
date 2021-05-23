import React from 'react'
import "./homepage.css"
import Header from '../Component/Header/header'
import Productcatagories from '../Component/Productcatagories/productcatagories'
import Featureproduct from '../Component/Featureproduct/featureproduct'
import Offer from "../Component/Offer/offer"
import Brands from '../Component/Brands/brands'
import Footer from '../Component/Footer/footer'
import Navbar from '../Component/Navbar/navbar'

const Home = () => {
    return (
        <div>
           <div className="xyz">
            <Navbar />
            <Header />
            </div>
            <Productcatagories />
            <Featureproduct />
            {/* <Offer /> */}
            <Brands />
            <Footer />
        </div>
    )
}

export default Home
