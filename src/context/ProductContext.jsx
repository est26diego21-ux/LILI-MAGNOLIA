import { createContext, useEffect, useState } from "react";
import { obtenerProductos } from './../services/productServices.js'

export const ProductContext = createContext();

export function ProductProvider({children}){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    
    const cargarProductos = async () => {
        setCargando(true);
        setError(null);

        try{
        const productosCargados = await obtenerProductos();
        setProductos(productosCargados);
        } catch (error){
        setError(error.message);
        } finally {
        setCargando(false);
        }
    };

    const agregarProducto = (producto) => {
        const productoConId = {
            ...producto,
            id: Date.now(),
            precio: Number(producto.precio),
            stock: Number(producto.stock)
        };
        setProductos([...productos, productoConId])
    };

    useEffect(() => {
        cargarProductos();
    },[]);
    
    const valor = {
        productos,
        setProductos,
        cargando,
        error,
        setCargando,
        setError,
        cargarProductos,
        agregarProducto
    };
    return (
        <ProductContext.Provider value = {valor}>
            {children}
        </ProductContext.Provider>
    );
};