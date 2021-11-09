import React from 'react'
import "./offer.css"
import Link from "react-router-dom"

const Offer = () => {
    return (
        <>
          <div className="offer">
                <div className="offer-containerr">
                    <div className="offer-row">
                        <div className="offer-col">
                            <img src="https://res.cloudinary.com/djc1o48j7/image/upload/v1620588163/fashion%20images/pic7_tuy82u.png" className="offer-img" alt="Error loading" />
                        </div>
                        <div className="offer-col">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <h1>Sale is on</h1>
                                <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat blanditiis minus,cupiditate quae eos tempora.</small>
                                <Link to="/product" className="btn">Buy now </Link>
                        </div>
                        </div>

                    </div>
                    </div>
        </>
    )
}

export default Offer
