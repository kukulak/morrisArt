import React from 'react';
import './menu.styles.scss'
import Menusocialitem from './menuItem.component'

class Menusocial extends React.Component{
    constructor(){
        super();
        
        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-001.png

        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-002.png

        this.state = {
           sections:[
            {
                "id": 14,
                "name": "lukayotl",
                "foto": "",
                "informacion": "",
                "link": ""
            },   
            {
                "id": 11,
                "name": "sili",
                "foto": "",
                "informacion": "sili es caracol en grecoromani azteka",
                "link": ""
            }
            ]
        }
    }    

    render(){
        return(

           
        
            <div className='contenedorMenuSocial'>

                {
                    this.state.sections.map(({name, foto, id}) => (
                        <Menusocialitem
                        key={id}
                        alt={name}
                        imgUrl={foto}
                        />
                    ))
                }

            </div>
        
        )
        }

}




export default Menusocial;