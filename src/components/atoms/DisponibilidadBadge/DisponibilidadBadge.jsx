import { validarProps } from '../../../utils/validarProps';
import './DisponibilidadBadge.css';

const DisponibilidadBadge = ({ stock = 0 }) => {
    validarProps("Disponibilidad badge", "stock", stock, "number");
    const disponible = stock > 0;
    const clase = disponible ? 'disponible' : 'agotado';
    const texto = disponible ? `En STOCK: ${stock} unidades` : 'Agotado';

    return (
        <span className={`disponibilidad-badge ${clase}`}>
            {texto}
        </span>
    )
};

export default DisponibilidadBadge;