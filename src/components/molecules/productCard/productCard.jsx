import { validarProps } from '../../../utils/validarProps';
import Boton from '../../atoms/Boton/Boton';
import DisponibilidadBadge from '../../atoms/DisponibilidadBadge/DisponibilidadBadge';
import PrecioTag from '../../atoms/PrecioTag/PrecioTag';
import './productCard.css';
import { memo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

function ProductCard({ producto = {}, onAgregar }){
    validarProps("Product Card", "producto", producto,"object");
    validarProps("Product Card", "onAgregar", onAgregar,"function");
    const {id, nombre, tamano, precio, stock, imagen, descripcion} = producto;

    const handleAgregar = () => {
        onAgregar(producto);
    };

    return (
    <motion.div className='product-card'
        initial = {{ opacity:0, y:-50}}
        animate = {{opacity:2, y:0}}
        transition={{duration: 0.4 }}
        >
        <Link to={`/producto/${id}`} className='producto-link'>
            <img 
            src={imagen}
            alt={nombre}
            className='product-image'
            />
            <h2 className='product-name'>{nombre}</h2>
            <h2 className='product-size'>{tamano}</h2>
        </Link>
        <div className='product-body'>
            <p className='product-description'>{descripcion}</p>
            <PrecioTag precio = {precio}/>
            <DisponibilidadBadge stock = {stock}/>
            <Boton 
            texto = {stock > 0 ? "Agregar al Carrito" : "Sin Disponibilidad"}
            disabled={stock === 0}
            onClick={handleAgregar}>
            </Boton>
        </div>
    </motion.div>
    )
}

export default memo(ProductCard);