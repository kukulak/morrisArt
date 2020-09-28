import React from 'react';
import './menu.styles.scss'
import { withRouter } from 'react-router-dom';

const Menusocialitem = ({alt, imgUrl}) =>(
  
       
     
            
            <div className='socialBtn'> 
                 <img src={imgUrl} alt={alt}/>
            </div>
           
            

      
   
);

export default withRouter(Menusocialitem);