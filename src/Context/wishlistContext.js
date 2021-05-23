import {createContext,useContext,useReducer} from "react"
import wishlistHandler from "../Reducer/wishlistReducer"
import {useEffect} from "react"
import axios from "axios"

export const wishlistContext = createContext()


export function WishlistProvider({children}){
    const [ state,wishlistdispatch ] = useReducer(wishlistHandler,{itemInwishlist:[]})
    
    return (
        <wishlistContext.Provider value={{wishlistdispatch,itemInwishlist:state.itemInwishlist}}>
            {children}
        </wishlistContext.Provider>
    )
}

export function useWishlist () {
    return useContext(wishlistContext)
}