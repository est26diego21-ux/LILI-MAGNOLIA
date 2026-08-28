import { lazy, Suspense } from 'react';
import './App.css'
import { CartProvider } from './context/CartContext.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import { Route, Routes } from 'react-router';
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Catalogo = lazy(() => import('./pages/Catalogo/Catalogo.jsx'));
const Carrito = lazy(() => import('./pages/Carrito/Carrito.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));
const Perfil = lazy(() => import('./pages/Perfil/Perfil.jsx'));
const ProductoDetalle = lazy(() => import('./pages/ProductoDetalle/ProductoDetalle.jsx'));
import Navbar from './components/organisms/Navbar/Navbar.jsx';
import Footer from './components/organisms/Footer/Footer.jsx';

function App() {
    return (
    <CartProvider>
    <ProductProvider>
      <Navbar/>
      <Suspense fallback={<div className='page-loader'>Cargando...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/producto/:id' element={<ProductoDetalle/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense> 
      {/* <div className='app'>
        <Header/>
        <MiniCarrito />
        <CatalogoProductos/>
        <div className='form-toggle'>
        <Boton texto={!formulario ? 'Agregar producto' : 'Ocultar formulario'}
          variante='secondary'
          onClick={mostrarFormulario}
          />
          </div>
         {formulario && <FormularioProducto/>}
      </div> */}
      <Footer />
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
