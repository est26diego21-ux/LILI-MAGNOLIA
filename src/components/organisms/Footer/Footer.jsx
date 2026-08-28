import './Footer.css';
import { memo } from 'react';
import Boton from '../../atoms/Boton/Boton';

function Footer () {
    const abrirEnPestana = (url) =>
        window.open(url, "_blank", "noopener,noreferrer");

    return(
        <footer className='footer'>
            <h3 className='footer-titulo'> LILI & MAGNOLIA </h3>
            <p className='footer-info'>
                El ecommerce del curso de REACT Inadaptados 2026
            </p>
            <div className='footer-redes'>
                <Boton
                    texto = "facebook" variante='secondary' tamano='pequeno' onClick={() => abrirEnPestana("https://www.facebook.com/diego.padillahurtado")}
                />
                <Boton
                    texto = "Instagram" variante='secondary' tamano='pequeno' onClick= {() => abrirEnPestana("https://www.instagram.com/diego_ed99/")}
                />
                <Boton
                    texto = "Tiktok" variante='secondary' tamano='pequeno' onClick={() => abrirEnPestana("https://cdn0.expertoanimal.com/es/posts/5/8/1/cuidados_de_una_capibara_20185_orig.jpg")}
                />
            </div>

            <p className='footer-creditos'>2026 INADAPTADOS ACADEMY - MADE BY REACT</p>
        </footer>
    );
};

export default memo(Footer);