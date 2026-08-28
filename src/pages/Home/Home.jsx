import './Home.css';
import { useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import ProductCard from '../../components/molecules/productCard/productCard.jsx';
import { useProducto } from '../../hooks/useProducto.js';
import { useCarrito } from '../../hooks/useCarrito.js';

const aparecer = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const beneficios = [
  {
    icono: '🌿',
    titulo: 'Cera vegetal natural',
    texto: 'Cera de soja de combustión limpia, sin parafinas ni tóxicos.',
  },
  {
    icono: '🕯️',
    titulo: 'Aromas que armonizan',
    texto: 'Fragancias creadas para calmar el ambiente y acompañar tu ritual.',
  },
  {
    icono: '🤍',
    titulo: 'Hechas a mano',
    texto: 'Cada vela se vierte y revisa a mano, en pequeños lotes.',
  },
];

const categorias = [
  {
    nombre: 'Paz y Hogar',
    descripcion: 'Maderas cálidas y notas envolventes para tu refugio.',
    imagen: 'https://media.timeout.com/images/105657235/image.jpg',
  },
  {
    nombre: 'Flores y Jardin',
    descripcion: 'Florales frescos y luminosos que despiertan los sentidos.',
    imagen:
      'https://alurahome.mx/cdn/shop/files/eterea_jazmin_grande.png?v=1755218971',
  },
  {
    nombre: 'Nuestro Sabor, Nuestra Tierra',
    descripcion: 'Aromas de tradición: canela, vainilla y chocolate.',
    imagen: 'https://m.media-amazon.com/images/I/71S6kMz9BbL.jpg',
  },
];

function Home() {
  const { productos, cargando, error } = useProducto();
  const { agregarAlCarrito } = useCarrito();

  const destacadas = useMemo(
    () => productos.filter((producto) => producto.stock > 0).slice(0, 3),
    [productos]
  );

  return (
    <div className="home">
      {/* ---------- HERO ---------- */}
      <section className="home-hero">
        <motion.div
          className="home-hero__contenido"
          initial="hidden"
          animate="visible"
          variants={aparecer}
        >
          <p className="home-hero__eyebrow">Velas aromáticas artesanales</p>
          <h1 className="home-hero__titulo">Enciende un momento de calma</h1>
          <p className="home-hero__subtitulo">
            Fragancias pensadas para traer paz y armonía a tu espacio. Respira,
            baja el ritmo y deja que el aroma haga el resto.
          </p>
          <div className="home-hero__acciones">
            <Link to="/catalogo" className="home-btn home-btn--primary">
              Explorar el catálogo
            </Link>
            <Link to="/catalogo" className="home-btn home-btn--ghost">
              Ver aromas destacados
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------- BENEFICIOS ---------- */}
      <motion.section
        className="home-beneficios"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={aparecer}
      >
        {beneficios.map((b) => (
          <article key={b.titulo} className="home-beneficio">
            <span className="home-beneficio__icono" aria-hidden="true">
              {b.icono}
            </span>
            <h3 className="home-beneficio__titulo">{b.titulo}</h3>
            <p className="home-beneficio__texto">{b.texto}</p>
          </article>
        ))}
      </motion.section>

      {/* ---------- VELAS DESTACADAS ---------- */}
      <section className="home-seccion">
        <div className="home-seccion__encabezado">
          <h2 className="home-seccion__titulo">Nuestras velas destacadas</h2>
          <Link to="/catalogo" className="home-seccion__link">
            Ver todo →
          </Link>
        </div>

        {cargando && (
          <p className="home-estado">Preparando la colección…</p>
        )}
        {error && (
          <p className="home-estado home-estado--error">
            No pudimos cargar las velas en este momento.
          </p>
        )}

        {!cargando && !error && (
          <div className="home-grid">
            {destacadas.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAgregar={agregarAlCarrito}
              />
            ))}
          </div>
        )}
      </section>

      {/* ---------- CATEGORIAS ---------- */}
      <section className="home-seccion">
        <div className="home-seccion__encabezado">
          <h2 className="home-seccion__titulo">Encuentra tu aroma</h2>
        </div>
        <div className="home-categorias">
          {categorias.map((cat) => (
            <Link key={cat.nombre} to="/catalogo" className="home-categoria">
              <img
                src={cat.imagen}
                alt={cat.nombre}
                className="home-categoria__img"
                loading="lazy"
              />
              <div className="home-categoria__overlay">
                <h3 className="home-categoria__nombre">{cat.nombre}</h3>
                <p className="home-categoria__desc">{cat.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="home-cierre">
        <h2 className="home-cierre__titulo">Un aroma para cada momento</h2>
        <p className="home-cierre__texto">
          Desde la lectura de la tarde hasta el descanso profundo de la noche.
        </p>
        <Link to="/catalogo" className="home-btn home-btn--primary">
          Comprar velas
        </Link>
      </section>
    </div>
  );
}

export default Home;