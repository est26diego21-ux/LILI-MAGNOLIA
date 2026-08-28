import { validarProps } from '../../../utils/validarProps';
import './ContadorCarrito.css'

function ContadorCarrito ({cantidad = 0}){
    validarProps("Contador Carrito", "cantidad", cantidad, "number");
    return(
        <div className='contador-carrito'>
            <span className='contador-carrito-numero'>{cantidad}</span>
            <span>items</span>
        </div>
    );
}

export default ContadorCarrito;