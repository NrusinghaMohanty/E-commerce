
function wishlistHandler(state,action){
    switch(action.type){
       case "ADD_TO_CART":
       return {...state,itemIncart:[...state.itemIncart, action.payload]}
       case "MOVE_TO_WISHLIST":
       return {...state,itemInwishlist:[...state.itemInwishlist, action.payload]};
       case "INCREMENT":
       return {...state,itemIncart:state.itemIncart.map(item=> item._id === action.payload._id ? {...item,quantity:item.quantity+1 }:item)};
       case "DECREMENT":
       if(action.payload.quantity === 1){
       return {...state,itemIncart:state.itemIncart.filter(item=> item._id !==action.payload._id)} 
       }else{      
       return {...state,itemIncart:state.itemIncart.map(item=> item._id === action.payload._id ? {...item,quantity:item.quantity-1 }:item)}    
       }
       case "REMOVE_IN_CART":
       return {...state,itemIncart:state.itemIncart.filter(item=> item._id !==action.payload)}   
       case "REMOVE_FROM_WISHLIST":
       return {...state,itemInwishlist:state.itemInwishlist.filter(item=> item._id !==action.payload)};
       case "fetch":
       console.log(action.payload)    
       return {...state,itemInwishlist:action.payload};   
       default:
       return state;          
   }
}

export default wishlistHandler ;