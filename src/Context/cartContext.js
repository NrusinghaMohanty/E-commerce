import {createContext,useContext,useReducer} from "react"
import cartHandler from "../Reducer/cartReducer"

export const CartContext = createContext()

export function useCart () {
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [ state,cartdispatch ] = useReducer(cartHandler,{itemIncart:[]})

    return (
        <CartContext.Provider value={{cartdispatch,itemIncart:state.itemIncart}}>
            {children}
        </CartContext.Provider>
    )
}
