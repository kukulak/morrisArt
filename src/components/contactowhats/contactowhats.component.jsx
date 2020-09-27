import React from 'react';
import './contactowhats.styles.scss'
import loWhats from '../../whatsApp.svg';

const Whats = ({ title, imageUrl }) =>(
<div
            className='contenedorWhatsapp'
            >
            <div className= 'whatsapp'>
                <h1 className='txtContanto'>VENTAS <br />POR WHATSAPP
                <br />DIRECTO CON
                <br />EL ARTISTA
                </h1>
                <a className='whatsBtn' href="#">
                <img src={loWhats} alt="whatsapp"/>
                {/* <h3 className='txtYear'>2020</h3> */}
                    
                </a>
            </div>
        </div>
);

export default Whats