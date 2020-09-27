import React from 'react';
import './palabrasinter.styles.scss'
import DobleErre from '../../dobleR.svg';

const PalabrasInter = () =>(
    <div
       className='palabrasInter'
    >
        <div className='dobleErreInter'> 
            <img src={DobleErre}
            alt="DobleErreInter"/>
        </div>
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
            <h2 className='txtInter'>
            Cada una de mis creaciones consisten en dar una nueva oportunidad de vida a los cubiertos, principalmente a las cucharas que han sido desechadas por viejas, por moda o simplemente porque ya no son deseadas. Ya en la labor creativa, cada cuchara adquiere un nombre propio popular de México según sus características individuales y proceso creativo.
            </h2>
        </div>
    </div>
);

export default PalabrasInter