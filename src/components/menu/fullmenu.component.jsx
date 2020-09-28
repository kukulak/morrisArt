import React from 'react';
import './menu.styles.scss'
import logo from '../../logo-MORRIS.svg';
import Menu from './menu.component'
import Menusocial from './menusocial.component'


const fullMenu = () =>(
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
        className='contenedorMenuAnimate'
            >

                <Menu />

  
            

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
        className='contenedorMenuSocialAnimate'
            >

                <Menusocial />

  
            

        </div>



    </div>
);






export default fullMenu;