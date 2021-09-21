import {createContext,useContext,useReducer} from "react"
import productHandler from "../Reducer/productReducer"

export const ProductContext = createContext()

export function useProduct () {
    return useContext(ProductContext)
}

export function ProductProvider({children}){
    const [ state,dispatch ] = useReducer(productHandler,{product:[]})

    return (
        <ProductContext.Provider value={{dispatch,product:state.product}}>
            {children}
        </ProductContext.Provider>
    )
}