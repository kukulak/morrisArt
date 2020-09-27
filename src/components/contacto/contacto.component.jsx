import React from 'react';
import './contacto.styles.scss'
import Formulario from '../contactoformulario/contactoformulario.component'
import Whats from '../contactowhats/contactowhats.component'
import logo from '../../dobleR.svg';
const Contacto = ({imageUrl }) =>(
    <div>
        <div
       className='contenedorContacto'
        >

           <Whats />
            <Formulario />

        </div>
        <div className='contactoDobeErre'> 
            <img src={logo} alt="DobleErre"/>
        </div>
    </div>
);

export default Contacto