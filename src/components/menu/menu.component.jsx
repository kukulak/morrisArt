import React from 'react';
import './menu.styles.scss'
import logo from '../../logo-MORRIS.svg';

const Menu = () =>(
    <div
       className='menu'
    >
        <div className='logoMorris'> 
            <img src={logo} alt="DobleErre"/>
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
        className='contenedorMenu'
            >
            <a className='menuBtn'>Home
            </a>
            <a className='menuBtn'>acerca de mi
            </a>
            <a className='menuBtn'>colecciones
            </a>
            <a className='menuBtn'>contacto
            </a>
            <a className='menuBtn socialBtn'> 
                <img src="" alt="whatsapp"/>
            </a>
            <a className='menuBtn socialBtn'> 
                <img src="" alt="instagram"/>
            </a>
            

        </div>
    </div>
);

export default Menu