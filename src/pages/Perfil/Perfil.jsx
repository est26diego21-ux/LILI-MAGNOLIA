import './Perfil.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Perfil() {
    const usuario = {
        nombre: 'Diego Eduardo Padilla Hurtado',
        email: 'est26@gmail.com',
        telefono: '449 548 06 51',
    };

     useDocumentTitle(
        carrito.length === 0 ? 'LILI & MAGNOLIA' : `Carrito (${totalItems}) · LILI & MAGNOLIA`
    );

    const iniciales = usuario.nombre
        .split(' ')
        .slice(0, 2)
        .map((palabra) => palabra[0])
        .join('')
        .toUpperCase();

    return (
        <div className="perfil">
            <header className="perfil__encabezado">
                <p className="perfil__eyebrow">Mi cuenta</p>
                <h1 className="perfil__titulo">Mi perfil</h1>
            </header>

            <section className="perfil__tarjeta">
                <div className="perfil__cabecera">
                    <span className="perfil__avatar" aria-hidden="true">{iniciales}</span>
                    <div>
                        <p className="perfil__nombre">{usuario.nombre}</p>
                        <p className="perfil__rol">Cliente · Inadaptados 2026</p>
                    </div>
                </div>

                <dl className="perfil__datos">
                    <div className="perfil__fila">
                        <dt className="perfil__etiqueta">Nombre</dt>
                        <dd className="perfil__valor">{usuario.nombre}</dd>
                    </div>
                    <div className="perfil__fila">
                        <dt className="perfil__etiqueta">Email</dt>
                        <dd className="perfil__valor">{usuario.email}</dd>
                    </div>
                    <div className="perfil__fila">
                        <dt className="perfil__etiqueta">Teléfono</dt>
                        <dd className="perfil__valor">{usuario.telefono}</dd>
                    </div>
                </dl>

                <div className="perfil__acciones">
                    <button
                        type="button"
                        className="perfil__boton"
                        onClick={() => alert('Editar perfil - PROXIMAMENTE')}
                    >
                        Editar perfil
                    </button>
                    <button
                        type="button"
                        className="perfil__boton perfil__boton--acento"
                        onClick={() => alert('Historial de pedidos - PROXIMAMENTE')}
                    >
                        Mis pedidos
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Perfil;