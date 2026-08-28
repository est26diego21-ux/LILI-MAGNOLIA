import { Link } from "react-router";

function NotFound(){
    return(
        <div>
            <h1>404</h1>
            <p>No existe la pagina solicitada</p>
            <Link to='/'>Volver al Inicio</Link>
        </div>
    );
}

export default NotFound;