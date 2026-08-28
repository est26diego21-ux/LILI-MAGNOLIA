import FormularioProducto from "../../components/organisms/FormularioProducto/FormularioProducto";
import CatalogoProductos from "../../components/organisms/CatalogoProductos/CatalogoProductos";
import Boton from "../../components/atoms/Boton/Boton";
import { useState } from "react";

function Catalogo(){
    const [formulario, setFormulario] = useState(false);
    const mostrarFormulario = () => setFormulario(!formulario);
    return(
        <div className="pagina-catalogo">
            <h1>Nuestro Catálogo</h1>
            <CatalogoProductos/>
            <div className='form-toggle'>
            <Boton texto={!formulario ? 'Agregar producto' : 'Ocultar formulario'}
            variante='secondary'
            onClick={mostrarFormulario}
            />
            </div>
            {formulario && <FormularioProducto/>}
        </div>
    );
}

export default Catalogo;