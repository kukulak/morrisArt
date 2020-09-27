import React from 'react';
import './slide.styles.scss'

const Slide = ({ title, imageUrl }) =>(
    <div className='eachSlide'>
        <div className='contenedorSlide'>
            <div className= 'slide'>
                <img src={imageUrl} alt={title}/>
            </div>
        </div>
    </div>
);

export default Slide