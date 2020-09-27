import React from 'react';
import './titulo.styles.scss'

const Titulo = ({ title }) =>(
    <div
       className='palabrasInter'
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
            className='contenedortxtInter'
            >
            <h1 className='txtInter'>{title}</h1>
        </div>
    </div>
);

export default Titulo