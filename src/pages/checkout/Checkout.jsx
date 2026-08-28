import './Checkout.css';
import { useState } from 'react';
import { Link } from 'react-router';
import { useCarrito } from '../../hooks/useCarrito';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Boton from '../../components/atoms/Boton/Boton';

const formatoPrecio = (valor) => `$${Number(valor).toLocaleString('es-MX')}`;

const CAMPOS_INICIALES = { nombre: '', telefono: '', direccion: '', tarjeta: '' };



function Checkout() {
    const { carrito, totalItems, totalPrecio, vaciarCarrito } = useCarrito();
    const [form, setForm] = useState(CAMPOS_INICIALES);
    const [errores, setErrores] = useState({});
    const [pedidoOk, setPedidoOk] = useState(null);

    useDocumentTitle('Finalizar compra · LILI & MAGNOLIA');

    /* ---------- Carrito vacío ---------- */
    if (carrito.length === 0 && !pedidoOk) {
        return (
            <div className="checkout">
                <div className="checkout__estado">
                    <span className="checkout__estado-icono" aria-hidden="true">🛒</span>
                    <h1 className="checkout__estado-titulo">Tu carrito está vacío</h1>
                    <p className="checkout__estado-texto">
                        No hay productos para finalizar la compra. Vuelve al inicio y
                        agrega algunas fragancias a tu carrito.
                    </p>
                    <Link to="/" className="checkout__cta">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    /* ---------- Confirmación de pedido ---------- */
    if (pedidoOk) {
        return (
            <div className="checkout">
                <div className="checkout__estado">
                    <span className="checkout__estado-icono" aria-hidden="true">✅</span>
                    <h1 className="checkout__estado-titulo">¡Pedido realizado!</h1>
                    <p className="checkout__estado-texto">
                        Gracias, {pedidoOk.nombre}. Tu pedido <strong>#{pedidoOk.folio}</strong> por{' '}
                        {formatoPrecio(pedidoOk.total)} está en camino a: {pedidoOk.direccion}.
                    </p>
                    <Link to="/catalogo" className="checkout__cta">Seguir comprando</Link>
                </div>
            </div>
        );
    }

    /* ---------- Formulario ---------- */
    const actualizarCampo = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrores((prev) => ({ ...prev, [name]: '' }));
    };

    const validar = () => {
        const nuevos = {};
        if (!form.nombre.trim()) nuevos.nombre = 'Ingresa tu nombre';
        if (!/^\d{7,}$/.test(form.telefono.replace(/\s/g, '')))
            nuevos.telefono = 'Teléfono no válido';
        if (!form.direccion.trim()) nuevos.direccion = 'Ingresa tu dirección';
        if (!/^\d{16}$/.test(form.tarjeta.replace(/\s/g, '')))
            nuevos.tarjeta = 'La tarjeta debe tener 16 dígitos';
        return nuevos;
    };

    const realizarPedido = (e) => {
        e.preventDefault();
        const nuevos = validar();
        if (Object.keys(nuevos).length > 0) {
            setErrores(nuevos);
            return;
        }
        setPedidoOk({
            folio: String(Date.now()).slice(-6),
            nombre: form.nombre.trim(),
            direccion: form.direccion.trim(),
            total: totalPrecio,
        });
        vaciarCarrito();
    };

    return (
        <div className="checkout">
            <header className="checkout__encabezado">
                <p className="checkout__eyebrow">Último paso</p>
                <h1 className="checkout__titulo">Finalizar compra</h1>
                <p className="checkout__subtitulo">
                    {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'} ·{' '}
                    {formatoPrecio(totalPrecio)}
                </p>
            </header>

            <div className="checkout__layout">
                <form className="checkout__form" onSubmit={realizarPedido} noValidate>
                    <div className="checkout__campo">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            value={form.nombre}
                            onChange={actualizarCampo}
                            autoComplete="name"
                            placeholder="Nombre completo"
                        />
                        {errores.nombre && <span className="checkout__error">{errores.nombre}</span>}
                    </div>

                    <div className="checkout__campo">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            inputMode="numeric"
                            value={form.telefono}
                            onChange={actualizarCampo}
                            autoComplete="tel"
                            placeholder="10 dígitos"
                        />
                        {errores.telefono && <span className="checkout__error">{errores.telefono}</span>}
                    </div>

                    <div className="checkout__campo">
                        <label htmlFor="direccion">Dirección</label>
                        <input
                            id="direccion"
                            name="direccion"
                            type="text"
                            value={form.direccion}
                            onChange={actualizarCampo}
                            autoComplete="street-address"
                            placeholder="Calle, número, colonia, ciudad"
                        />
                        {errores.direccion && <span className="checkout__error">{errores.direccion}</span>}
                    </div>

                    <div className="checkout__campo">
                        <label htmlFor="tarjeta">Número de tarjeta</label>
                        <input
                            id="tarjeta"
                            name="tarjeta"
                            type="text"
                            inputMode="numeric"
                            maxLength={19}
                            value={form.tarjeta}
                            onChange={actualizarCampo}
                            placeholder="16 dígitos"
                        />
                        {errores.tarjeta && <span className="checkout__error">{errores.tarjeta}</span>}
                    </div>

                    <Boton texto="Realizar pedido" variante="primary" />

                    <Link to="/carrito" className="checkout__volver">← Volver al carrito</Link>
                </form>

                <aside className="checkout__resumen">
                    <h2 className="checkout__resumen-titulo">Tu pedido</h2>
                    <ul className="checkout__resumen-items">
                        {carrito.map((item) => (
                            <li key={item.id}>
                                <span>{item.nombre} × {item.cantidad}</span>
                                <span>{formatoPrecio(item.precio * item.cantidad)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout__resumen-total">
                        <span>Total</span>
                        <span>{formatoPrecio(totalPrecio)}</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Checkout;