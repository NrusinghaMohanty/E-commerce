import React from 'react'

function productHandler(state,action){
    switch(action.type){
       case "ADD_TO_CART":
       return {...state,itemIncart:[...state.itemIncart, action.payload]}
       case "MOVE_TO_WISHLIST":
       return {...state,itemInwishlist:[...state.itemInwishlist, action.payload]};
       case "fetch":
       return {...state,product: action.payload}; 
       default:
       return state;          
    }
}

export default productHandler;
