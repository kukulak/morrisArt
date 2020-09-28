import React from 'react';
import './menu.styles.scss'
import { withRouter } from 'react-router-dom';

const Menuitem = ({link}) =>(
  
       
       
          
            <div className='menuBtn'> 
                <p> {link} </p>
            </div>

        
   
);

export default withRouter(Menuitem);