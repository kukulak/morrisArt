import React from 'react';
import './coleccion.styles.scss'

const Coleccion = ({ title, imageUrl }) =>(
    <div
       className='eachColeccion'
    >
        <div
         data-aos="fade-right"
        //  data-aos="zoom-in-up"
         data-aos-offset="200"
         data-aos-delay="10"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center" 
         data-aos-anchor-placement="center-bottom"
            className='contenedorColeccion'
            >
            <div className= 'coleccion'>
                <a className='coleccionBtn' href={title}>
                <img src={imageUrl} alt="Colección Lukayotl"/>
                <h1 className='txtColeccion'>{title}</h1>
                {/* <h3 className='txtYear'>2020</h3> */}
                    
                </a>
            </div>
        </div>

        <div className='eachLine'> 
            <img src="https://valderramakelly.pythonanywhere.com/media/products/2020/09/23/separadorColor-001.png" alt="separador"/>
        </div>

    </div>
);

export default Coleccion