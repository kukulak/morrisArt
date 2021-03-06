import React from 'react';
import './menu.styles.scss'
import Menuitem from './menuItem.component'


class Menu extends React.Component{
    constructor(){
        super();
        
        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-001.png

        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-002.png

        this.state = {
           sections:[
            {
                "id": 14,
                "name": "home",
                "foto": "",
                "informacion": "",
                "link": ""
            },   
            {
                "id": 11,
                "name": "acerca de mi",
                "foto": "",
                "informacion": "sili es caracol en grecoromani azteka",
                "link": ""
            },
            {
                "id": 12,
                "name": "colecciones",
                "foto": "",
                "informacion": "",
                "link": ""
            },
            {
                "id": 13,
                "name": "contacto",
                "foto": "",
                "informacion": "",
                "link": ""
            }
            ]
        }
    }    

    render(){
        return(

    
        
            <div className='contenedorMenu'>

                {
                    this.state.sections.map(({name, id}) => (
                        <Menuitem
                        key={id}
                        link={ name.toUpperCase() }
                       
                        />
                    ))
                }

            </div>
           
        )
        }

}




export default Menu;