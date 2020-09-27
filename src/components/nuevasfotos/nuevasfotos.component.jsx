import React from 'react';
import './nuevasfotos.styles.scss'

const NuevasFotos = ({ title, imageUrl }) =>(
    <div className='eachFotoNueva'>
        <a className='contenedorFotoNueva'>
            <h2>{title}</h2>
            <div className="fotoNuevaBtn">+INFO</div>
            <div className= 'fotoNueva'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            >
                
            </div>
        </a>
    </div>
);

export default NuevasFotos