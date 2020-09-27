import React from 'react';
import Slide from '../slide/slide.component';
import './herobanner.styles.scss'



class Herobanner extends React.Component{
    constructor(){
        super();
        
           this.state = {
           sections:[
           
            {
                "id": 2,
                "coleccion": "sili mexika",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/HB-LukayotlMexika.png",
                "informacion": "",
                "link": ""
            },
            {
                "id": 3,
                "coleccion": "lukayotl mexica",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/HB-Lukayotl_Pr04XV4.png",
                "informacion": "",
                "link": ""
            }

            ]
        }
    }    

    render(){
        return(
            <div className='hb-slider'>

                {
                    this.state.sections.map(({title, foto, id}) => (
                        <Slide key={id} title={title} imageUrl={foto} />
                    ))
                }

            </div>
        )
        }

}

export default Herobanner