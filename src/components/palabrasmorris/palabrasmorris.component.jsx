import React from 'react';
import './palabrasmorris.styles.scss'
import logo from '../../dobleR.svg';
const palabrasmorris = ({ imageUrl }) =>(
    <div
       
         className='contenedorPalabrasMorris'
            >
            <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" 
            data-aos-anchor-placement="center-bottom"
            className= 'palabrasMorris'>
              
                <img 
                src="https://valderramakelly.pythonanywhere.com/media/products/2020/09/25/palabrasMorris-001.png"
                alt="Morris en su taller"
                />                  
               
            </div>

            <div 
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center" 
              data-aos-anchor-placement="top-bottom"
            className= 'letrasMorris'>
              
              <img className="dobleErre"
              src={logo}
              alt="doble erre"
              />                  
             
                <h1 className="letrasM">
                    <q>Cada una de mis piezas es realizada de manera manual lo cual la convierte en única e irrepetible. </q>
                </h1>
          </div>
    </div>

);

export default palabrasmorris