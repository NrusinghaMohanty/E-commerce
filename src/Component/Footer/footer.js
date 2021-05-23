import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-flex">
                    <div className="right">

                        <div className="sing-up">
                            {/* <!-- <h3>Sign up for get notification</h3> --> */}
                    <input placeholder="Enter your e-mail" />
                            <button>click here</button>
                        </div>
                    </div>

                    <div className="left">
                        <div className="social-media">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-github"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p>© 2020 Copyright: MDBootstrap.com </p>
                </div>
            </div>
        </>
    )
}

export default Footer
