import React from 'react';
import './homepage.styles.scss'

const HomePage = () =>(
    <div className='homepage'>
        <div className='contenedorColeccion'>
            <div className= 'coleccion'>
                <img src="IMG_3505" alt="Colección Lukayotl"/>
                <h1 className='txtColeccion'>LUKAYOTL</h1>
                <h3 className='txtYear'>2020</h3>
                <a className='coleccionBtn' href="#">ver toda la colecci&oacute;n 
                    <img src="/" alt="clic colecci&oacute;n"/>
                </a>
            </div>
        </div>

        <div className='contenedorColeccion'>
            <div className= 'coleccion'>
                <img src="IMG_3505" alt="Colección Lukayotl"/>
                <h1 className='txtColeccion'>SILI</h1>
                <h3 className='txtYear'>2020</h3>
                <a className='coleccionBtn' href="#">ver toda la colecci&oacute;n 
                    <img src="/" alt="clic colecci&oacute;n"/>
                </a>
            </div>
        </div>

        <div className='contenedorColeccion'>
            <div className= 'coleccion'>
                <img src="IMG_3505" alt="Colección Lukayotl"/>
                <h1 className='txtColeccion'>LUKAYOTL MEXIKA</h1>
                <h3 className='txtYear'>2020</h3>
                <a className='coleccionBtn' href="#">ver toda la colecci&oacute;n 
                    <img src="/" alt="clic colecci&oacute;n"/>
                </a>
            </div>
        </div>

        <div className='contenedorColeccion'>
            <div className= 'coleccion'>
                <img src="IMG_3505" alt="Colección Lukayotl"/>
                <h1 className='txtColeccion'>SILI MEXIKA</h1>
                <h3 className='txtYear'>2020</h3>
                <a className='coleccionBtn' href="#">ver toda la colecci&oacute;n 
                    <img src="/" alt="clic colecci&oacute;n"/>
                </a>
            </div>
        </div>
    </div>
);

export default HomePage