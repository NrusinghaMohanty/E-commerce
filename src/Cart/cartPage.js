import React from 'react'
import axios from "axios"
import { useEffect ,useState} from "react"
import { useCart } from "../Context/cartContext"
import "./cartPage.css"
import Navbar from '../Component/Navbar/navbar'
import Loader from "react-loader-spinner"

const Cart = () => {

    const { cartdispatch,itemIncart } = useCart()
    const [loader,showLoader] = useState(false)

    
    useEffect(() => {
        (async () => {
          try{
            showLoader(true)
          const { cartProduct: cartdata } = await axios
            .get("https://e-commerce.nrusingha.repl.co/cart")
            .then((response) => {
              console.log(response.data)  
              return response.data;
            });
        cartdispatch({type:"fetch",payload:cartdata})
        showLoader(false)
        }catch{
          console.error("error")
        }
      })();
      }, []);


      const incrementQt = (item) => {
        (async () => {
          const { success, savecartProduct: data } = await axios
            .post(`https://e-commerce.nrusingha.repl.co/cart/${item._id}`, {
              quantity: item.quantity + 1
            })
            .then((response) => {
              return response.data;
            });
          if (success) {
            cartdispatch({ type: "INCREMENT", payload: item });
          } else {
            console.log("error");
          }
        })();
      };

      const decrementQt = (item) => {
        (async () => {
          const { cartProduct: cartitem } = await axios
            .get(`https://e-commerce.nrusingha.repl.co/cart/${item._id}`)
            .then((response) => {
              return response.data;
            });
          if (cartitem.quantity > 1) {
            const { success, savecartProduct: data } = await axios
              .post(`https://e-commerce.nrusingha.repl.co/cart/${item._id}`, {
                quantity: item.quantity - 1
              })
              .then((response) => {
                return response.data;
              });
            if (success) {
              cartdispatch({ type: "DECREMENT", payload: item });
            } else {
              console.log("error");
            }
          }else{
            (async () => {
              const {  success , cartProduct: data } = await axios
                .delete(`https://e-commerce.nrusingha.repl.co/cart/${item._id}`)
                .then((response) => {
                  return response.data;
                });
              if (success) {
                cartdispatch({ type: "REMOVE_IN_CART", payload: item._id });
              } else {
                console.log("error occured while removing item");
              }
            })();
          }
        })();
      };

      const removeFromcart = (id) => {
        (async () => {
          const {  success , cartProduct: data } = await axios
            .delete(`https://e-commerce.nrusingha.repl.co/cart/${id}`)
            .then((response) => {
              return response.data;
            });
          if (success) {
            cartdispatch({ type: "REMOVE_IN_CART", payload: id });
          } else {
            console.log("error occured while removing item");
          }
        })();
      };

      function showcart(item) {
        return (
        <>      <Navbar />
                <tr>
                  <td>
                    <div class="cart-info">
                       <img src={item.url} />
                       <div>
                           <p>{item.name}</p>
                           <small>{item.price}</small>
                           <br />
                           <span  onClick={()=>removeFromcart(item._id)} className="remove">Remove</span>
                        </div>
                    </div>
                </td>
                <td><button onClick={()=>incrementQt(item)} class="btn">+</button><span>{item.quantity}</span><button onClick={()=>decrementQt(item)} class="btn">-</button></td>
                <td>${item.price}</td> 
                </tr>   
        </>
        );
      }

      const totalCalculation = (acc,value) => {
        return acc = acc + (value.quantity*value.price);
       }
     
       let totalPrice = itemIncart.reduce(totalCalculation,0) ;

    return loader ?(
      <>
      <Navbar />
  
      <div className="loader">
        <Loader type="ThreeDots" color="grey"  height={80} width={80} />
      </div>
      </>
    ):(

        <>
        <div class="feature-container cart-page">            
            <table>
                <thead>
                  <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>

                      {itemIncart.map(showcart)} 
                </tbody>
            </table>
            <div class="total-price">
            <table>
                <tr>
                    <td>subtotal</td>
                    <td>${totalPrice}</td>
                </tr>
            </table>
        </div>    
        </div>        
        </>
    )
}

export default Cart