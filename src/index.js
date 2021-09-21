import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {ProductProvider} from "./Context/productContext";
import {CartProvider} from "./Context/cartContext";
import {WishlistProvider} from "./Context/wishlistContext"

ReactDOM.render(
  <React.StrictMode>
  <WishlistProvider>
  <CartProvider>
  <ProductProvider>
    <Router>
      <App />
    </Router>
    </ProductProvider>
    </CartProvider>
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
