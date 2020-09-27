import React from 'react';
import './contactoformulario.styles.scss'

const Formulario = ({ title, imageUrl }) =>(
    <div className='formulario'> 
    <h1>CONT&Aacute;CTANOS</h1>
                <form action="">
                    <label for="nombre">NOMBRE COMPLETO*</label>
                    <input type="text" id="nombre" name="nombre" placeholder="John"></input>
                    <label for="email">EMAIL*</label>
                    <input type="email" id="email" name="email" placeholder="mail@mail.com"></input>
                    <label for="pais">PAIS</label>
                    <input type="text" id="pais" name="pais" placeholder="M&eacute;xico"></input>
                    <label for="cp">CP</label>
                    <input type="text" id="cp" name="cp" placeholder="00000"></input>
                    <label for="mensaje">MENSAJE*</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Mensaje"></textarea>
                    <input type="submit" value="ENVIAR"></input>
                </form>
    </div>
);

export default Formulario