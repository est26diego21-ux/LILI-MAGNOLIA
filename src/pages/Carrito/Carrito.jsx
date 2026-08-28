import './Carrito.css';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarrito } from '../../hooks/useCarrito';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Boton from '../../components/atoms/Boton/Boton';

const formatoPrecio = (valor) => `$${Number(valor).toLocaleString('es-MX')}`;

function Carrito() {
    const {
        carrito,
        cambiarCantidad,
        quitarDelCarrito,
        vaciarCarrito,
        totalItems,
        totalPrecio,
    } = useCarrito();

    useDocumentTitle(
        carrito.length === 0 ? 'LILI & MAGNOLIA' : `Carrito (${totalItems}) · LILI & MAGNOLIA`
    );

    if (carrito.length === 0) {
        return (
            <div className="carrito">
                <div className="carrito__vacio">
                    <span className="carrito__vacio-icono" aria-hidden="true">🕯️</span>
                    <h1 className="carrito__vacio-titulo">Tu carrito está vacío</h1>
                    <p className="carrito__vacio-texto">
                        Aún no has elegido ninguna fragancia. Descubre nuestra colección
                        y encuentra la que acompañe tus espacios.
                    </p>
                    <Link to="/catalogo" className="carrito__cta">
                        Explorar el catálogo
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="carrito">
            <header className="carrito__encabezado">
                <p className="carrito__eyebrow">Tu selección</p>
                <h1 className="carrito__titulo">Carrito</h1>
                <p className="carrito__subtitulo">
                    {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'} listos para ti
                </p>
            </header>

            <div className="carrito__layout">
                <section className="carrito__items">
                    <AnimatePresence initial={false}>
                        {carrito.map((item) => (
                            <motion.article
                                key={item.id}
                                className="carrito-item"
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35 }}
                            >
                                <Link to={`/producto/${item.id}`} className="carrito-item__media">
                                    <img src={item.imagen} alt={item.nombre} loading="lazy" />
                                </Link>

                                <div className="carrito-item__info">
                                    <div className="carrito-item__cabecera">
                                        <Link to={`/producto/${item.id}`} className="carrito-item__nombre">
                                            {item.nombre}
                                        </Link>
                                        {item.tamano && (
                                            <span className="carrito-item__meta">{item.tamano}</span>
                                        )}
                                    </div>

                                    <p className="carrito-item__precio-unit">
                                        {formatoPrecio(item.precio)} c/u
                                    </p>

                                    <div className="carrito-item__acciones">
                                        <div className="carrito-item__stepper">
                                            <Boton
                                                texto="−"
                                                variante="secondary"
                                                tamano="pequeno"
                                                onClick={() => cambiarCantidad(item.id, -1)}
                                            />
                                            <span className="carrito-item__cantidad">{item.cantidad}</span>
                                            <Boton
                                                texto="+"
                                                variante="secondary"
                                                tamano="pequeno"
                                                disabled={item.cantidad >= item.stock}
                                                onClick={() => cambiarCantidad(item.id, +1)}
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="carrito-item__quitar"
                                            onClick={() => quitarDelCarrito(item.id)}
                                        >
                                            Quitar
                                        </button>
                                    </div>
                                </div>

                                <p className="carrito-item__subtotal">
                                    {formatoPrecio(item.precio * item.cantidad)}
                                </p>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </section>

                <motion.aside
                    className="carrito__resumen"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <h2 className="carrito__resumen-titulo">Resumen</h2>

                    <dl className="carrito__resumen-filas">
                        <div className="carrito__resumen-fila">
                            <dt>Subtotal ({totalItems})</dt>
                            <dd>{formatoPrecio(totalPrecio)}</dd>
                        </div>
                        <div className="carrito__resumen-fila">
                            <dt>Envío</dt>
                            <dd className="carrito__resumen-envio">Gratis</dd>
                        </div>
                    </dl>

                    <div className="carrito__resumen-total">
                        <span>Total</span>
                        <span>{formatoPrecio(totalPrecio)}</span>
                    </div>

                    <Boton
                        texto="Finalizar compra"
                        variante="primary"
                        onClick={() => alert('Checkout - PROXIMAMENTE')}
                    />

                    <Link to="/catalogo" className="carrito__seguir">
                        ← Seguir comprando
                    </Link>

                    <button
                        type="button"
                        className="carrito__vaciar"
                        onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                    </button>
                </motion.aside>
            </div>
        </div>
    );
}

export default Carrito;