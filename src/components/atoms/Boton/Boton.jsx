import { validarOpciones, validarProps } from '../../../utils/validarProps';
import './Boton.css';
function Boton({ texto = "Boton", variante = "primary", tamano = "normal", disabled = false, activo= false, onClick}) {
    validarProps("Boton", "texto", texto, 'string');
    validarProps("Boton", "variante", variante, 'string');
    validarProps("Boton", "tamano", tamano, 'string');
    validarProps("Boton", "disabled", disabled, 'boolean');
    validarProps("Boton", "activo", activo, 'boolean');
    validarOpciones("Boton", "Variantes Boton", tamano, ['pequeno', 'normal', 'grande'])
    const varianteValida = ['primary', 'secondary', 'danger'];
    const varianteSegura = varianteValida.includes(variante) ? variante : "primary";
    const clases = `boton ${varianteSegura} ${tamano === 'normal' ? '' : tamano} ${activo ? 'activo': ''}`;

    return (
        <button
            className={clases.trim()}
            disabled={disabled}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}

export default (Boton);