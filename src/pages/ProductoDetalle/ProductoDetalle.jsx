import './ProductoDetalle.css';
import { useParams, Link } from 'react-router';
import { useProducto } from '../../hooks/useProducto';
import PrecioTag from '../../components/atoms/PrecioTag/PrecioTag';
import DisponibilidadBadge from '../../components/atoms/DisponibilidadBadge/DisponibilidadBadge';
import Boton from '../../components/atoms/Boton/Boton';
import { useCarrito } from '../../hooks/useCarrito';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function ProductoDetalle(){
    const { id } = useParams();
    const { productos, cargando } = useProducto();
    const { agregarAlCarrito } = useCarrito();
    const producto = productos.find((producto) => producto.id === Number(id));
    useDocumentTitle(producto ? producto.nombre : 'LILI & MAGNOLIA');
    if(!producto && !cargando){
        return(
            <div className='detalle-mensaje'>
                <p>No encontramos un producto con los criterios de busqueda</p>
                <Link to= '/catalogo'>Volver al catalogo</Link>
            </div>
        )
    }

    if(cargando){
        return <p className='detalle-mensaje'>Cargando el producto</p>
    }
    return(
        <div className='detalle'>
            <Link to= '/catalogo' className='detalle-volver'>{"◄ Volver al catalogo"}</Link>
            <br />
            <img src={producto.imagen} alt={producto.nombre} className='detalle-imagen'/>
            <div className='detalle-info'>
                <h1 className='detalle-nombre'>{producto.nombre} </h1>
                <h3 className='detalle-tamano'>{producto.tamano} </h3>
                <p className='detalle-descripcion'>{producto.descripcion} </p>
                <PrecioTag precio={producto.precio} />
                <DisponibilidadBadge stock={producto.stock} />
                <Boton
                    texto={producto.stock > 0 ? 'AGREGAR AL CARRITO' : 'SIN DISPONIBILIDAD'}
                    disabled={producto.stock === 0}
                    onClick={() => agregarAlCarrito(producto)}
                />
            </div>
            
        </div>
    )
}

export default ProductoDetalle;