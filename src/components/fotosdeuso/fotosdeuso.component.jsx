import React from 'react';
import './fotosdeuso.styles.scss'

const Uso = ({ imageUrl }) =>(
    <div
        //  data-aos="fade-right"
         data-aos="zoom-in-up"
         data-aos-offset="200"
         data-aos-delay="10"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center" 
         data-aos-anchor-placement="center-bottom"
         className='contenedorUso'
            >
            <div className= 'uso'>
              
                <img 
                src={imageUrl}
                alt="Cucharas de Calavera en Uso"
                />                  
               
            </div>
    </div>

);

export default Uso