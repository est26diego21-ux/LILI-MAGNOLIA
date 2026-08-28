import './FormularioProducto.css';
import { useState } from 'react';
import Boton from '../../atoms/Boton/Boton';
import { useProducto } from '../../../hooks/useProducto';

const estadoInicial = {
    nombre: '',
    precio: '',
    stock: '',
    imagen: '',
    descripcion: ''
};

function FormularioProducto() {
    const {agregarProducto} = useProducto();
    const [producto, setProducto] = useState(estadoInicial);
    const [errores, setErrores] = useState({});


    const handleChange = (e) => {
        const {name, value} = e.target;
        setProducto({...producto, [name]:value});
    };

    const handleSubmit = () => {
        const nuevosErrores = {
            nombre: producto.nombre.length < 3 ? "El minimo son 3 caracteres" : '',
            precio: Number(producto.precio) <= 0 ? "El precio debe ser mayor a 0" : '',
            stock: producto.stock === '' ? "Stock requerido" : '',
            imagen: !producto.imagen ? "URL requerida" : '',
            descripcion: producto.descripcion.length < 10 ? "Descripcion debe contener minimo 10 caracteres" : ''
        };
        setErrores(nuevosErrores);
        const hayErrores = Object.values(nuevosErrores).some(error => error !== '');

        if(!hayErrores){
            agregarProducto(producto);
            setProducto(estadoInicial);
            setErrores({});
        }
    };

    const handleLimpiar = () => {
        setProducto(estadoInicial);
        setErrores({});
    };

    return(
        <div className='formulario'>
            <h2 className='formulario-titulo'>Agregar Producto</h2>

            <div className='campo'>
                <label className='campo-label'>Nombre del producto:</label>
                <input
                    type="text"
                    name = "nombre"
                    className='campo-input'
                    value={producto.nombre}
                    onChange={handleChange}
                    placeholder='Nombre del Producto'
                />
                {errores.nombre && <p className='campo-error'>{errores.nombre}</p>}
            </div>

            <div className='campo'>
                <label className='campo-label'>Precio:</label>
                <input
                    type="number"
                    name = "precio"
                    className='campo-input'
                    value={producto.precio}
                    onChange={handleChange}
                    placeholder='Precio en pesos MXN'
                />
                {errores.precio && <p className='campo-error'>{errores.precio}</p>}
            </div>

            <div className='campo'>
                <label className='campo-label'>Stock:</label>
                <input
                    type="number"
                    name = "stock"
                    className='campo-input'
                    value={producto.stock}
                    onChange={handleChange}
                    placeholder='Cantidad disponibles'
                />
                {errores.stock && <p className='campo-error'>{errores.stock}</p>}
            </div>

            <div className='campo'>
                <label className='campo-label'>URL DE IMAGEN:</label>
                <input
                    type="text"
                    name = "imagen"
                    className='campo-input'
                    value={producto.imagen}
                    onChange={handleChange}
                    placeholder='HTTPS://...'
                />
                {errores.imagen && <p className='campo-error'>{errores.imagen}</p>}
            </div>

            <div className='campo'>
                <label className='campo-label'>Descripción:</label>
                <textarea
                    name = "descripcion"
                    className='campo-input'
                    value={producto.descripcion}
                    onChange={handleChange}
                    rows="6"
                    placeholder='Breve descripcion del producto...'
                />
                {errores.descripcion && <p className='campo-error'>{errores.descripcion}</p>}
            </div>

            <div className='formulario-acciones'>
                <Boton
                    texto="Crear Producto"
                    variante='primary'
                    onClick={handleSubmit}
                />
                <Boton
                    texto="Borrar"
                    variante='danger'
                    onClick={handleLimpiar}
                />
            </div>
        </div>
    );
};

export default FormularioProducto;