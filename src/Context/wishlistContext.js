import {createContext,useContext,useReducer} from "react"
import wishlistHandler from "../Reducer/wishlistReducer"

export const wishlistContext = createContext()


export function useWishlist () {
    return useContext(wishlistContext)
}
export function WishlistProvider({children}){
    const [ state,wishlistdispatch ] = useReducer(wishlistHandler,{itemInwishlist:[]})
    
    return (
        <wishlistContext.Provider value={{wishlistdispatch,itemInwishlist:state.itemInwishlist}}>
            {children}
        </wishlistContext.Provider>
    )
}
