import './CatalogoProductos.css';
import { useEffect, useState, useMemo } from 'react';
import { obtenerProductosporId } from '../../../services/productServices.js'
import ProductCard from '../../molecules/productCard/productCard.jsx';
import Boton from '../../atoms/Boton/Boton.jsx';
import { useCarrito } from '../../../hooks/useCarrito.js';
import { useProducto } from '../../../hooks/useProducto.js';


function CatalogoProductos() {
  const {productos, setProductos, cargando, error, setCargando, setError, cargarProductos} = useProducto();
  const { agregarAlCarrito } = useCarrito();
  const [busqueda, setBusqueda] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('todos');
  const [precioMax, setPrecioMax] = useState('');


  const buscarPorId = async () => {
    const termino = busqueda.trim();
    if(termino===''){
      cargarProductos();
      return;
    };

    if(isNaN(termino)){
      return;
    }
    setCargando(true);
    setError(null);

    try{
      const producto = await obtenerProductosporId(termino);
      setProductos([producto]);
    } catch (error){
      setError(error.message);
      setProductos([]);
    } finally {
      setCargando(false);
    }
  };

  const normalizar = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

  const productosVisibles = useMemo(() => {
    const Filtrados = productos.filter((producto) => {
      if(busqueda.trim !== '' && !isNaN(busqueda.trim())) {
        return true;
      };
      return normalizar(producto.nombre).includes(normalizar(busqueda));
    });

    const disponibles = Filtrados.filter((producto) => {
      if(disponibilidad === 'disponibles'){
        return producto.stock > 0;
      };
      if(disponibilidad === 'agotados'){
        return producto.stock === 0;
      }
      return true;
    });

    return disponibles.filter((producto) => {
      if(precioMax <= 0) return true;
      return producto.precio <= precioMax;
    });
  }, [productos, busqueda, disponibilidad, precioMax]);


  const limpiarFiltros = () => {
    setBusqueda('');
    setDisponibilidad("todos");
    setPrecioMax('');
  };

  useEffect(() => {
    if(busqueda.trim()===''){
      cargarProductos();
    };
  }, [busqueda]);

  return (
    <div className='catalogo'>
      <div className='catalogo-filtros'>
        <Boton
          texto="Todos"
          variante='secondary'
          activo={disponibilidad==='todos'}
          onClick={() => setDisponibilidad("todos")} />
          <Boton
          texto="Disponible"
          variante='secondary'
          activo={disponibilidad==='disponibles'}
          onClick={() => setDisponibilidad("disponibles")} />
          <Boton
          texto="Agotados"
          variante='secondary'
          activo={disponibilidad==='agotados'}
          onClick={() => setDisponibilidad("agotados")} />
      </div>


      <div className='catalogo-filtros'>
        <span>PRECIO MAXIMO:</span>
        <input
          type="number"
          className='busqueda-input'
          placeholder="SIN TOPE"
          value={precioMax}
          onChange={(e) => setPrecioMax(Number(e.target.value))}/>
      </div>

      <div className='catalogo-busqueda'>
          <input
          type="text"
          className='busqueda-input'
          placeholder="BUSCAR POR NOMBRE O ID..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter') buscarPorId();
          }} />
          <Boton
          texto = {cargando ? "Buscando articulo..." : "Buscar por ID"}
          onClick={buscarPorId}
          disabled={cargando}/>
      </div>

      <div className='catalogo-acciones'>
        <Boton
          texto="LIMPIAR FILTROS"
          variante='secondary'
          onClick={limpiarFiltros}/>
        <Boton
        texto = {cargando ? "Cargando..." : "Recargar Productos"}
        onClick={cargarProductos}
        disabled={cargando}/>

      </div>


      {error && (
        <div className='catalogo-error'>
          <p>Ups, lo sentimos, no pudimos cargar los productos</p>
          <Boton texto= "reintentar" onClick={cargarProductos}/>
        </div>
      )}
      {!error && !cargando && (<div className='catalogo-grid'>
      {productosVisibles.length === 0 &&
      <span>NINGUN PRODUCTO CUMPLE CON LOS CRITERIOS DE BUSQUEDA</span>}

          {productosVisibles.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onAgregar = {agregarAlCarrito}
            />
          ))}
      </div>)}
      {!error && !cargando && (
      <span>{productosVisibles.length} PRODUCTOS COINCIDEN CON LOS CRITERIOS DE BUSQUEDA</span>)}
      
    </div>
  )
}

export default (CatalogoProductos);