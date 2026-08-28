import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function useProducto(){
    const context = useContext(ProductContext);
    if(!context){
        throw new Error('UseProducto debe usarse dentro de un ProductProvider')
    };
    return context;
}