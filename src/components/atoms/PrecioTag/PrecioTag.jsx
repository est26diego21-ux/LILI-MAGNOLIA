import { validarProps } from '../../../utils/validarProps';
import './PrecioTag.css';

const PrecioTag = ({precio = 0}) => {
    validarProps('precio Tag', 'precio', precio, 'number')
    const precioNumero = Number(precio);
    const precioSeguro = isNaN(precioNumero) ? 0 : precioNumero;
    return(
        <p className = "precio-tag">
            ${precioSeguro} MXN
        </p>
    );
}

export default PrecioTag;