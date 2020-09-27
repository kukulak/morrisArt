import React from 'react';
import NuevasFotos from '../nuevasfotos/nuevasfotos.component';
import './nuevas.styles.scss'



class Nuevas extends React.Component{
    constructor(){
        super();
        
           this.state = {
           sections:[
           
            {
                "id": 2,
                "coleccion": "Catarino",
                "foto": "https://valderramakelly.pythonanywhere.com/media/newProduct/2020/09/24/creaciones-001.jpg",
                "informacion": "Catarino",
                "link": ""
            },
            {
                "id": 2,
                "coleccion": "Camila",
                "foto": "https://valderramakelly.pythonanywhere.com/media/newProduct/2020/09/24/creaciones-002.jpg",
                "informacion": "Camila",
                "link": ""
            },
            {
                "id": 2,
                "coleccion": "Salustia",
                "foto": "https://valderramakelly.pythonanywhere.com/media/newProduct/2020/09/24/creaciones-003.jpg",
                "informacion": "Salustia",
                "link": ""
            },
            {
                "id": 3,
                "coleccion": "Salma",
                "foto": "https://valderramakelly.pythonanywhere.com/media/newProduct/2020/09/24/creaciones-004.jpg",
                "informacion": "Salma",
                "link": ""
            }

            ]
        }
    }    

    render(){
        return(
            <div className='contenedorNuevas'>

                {
                    this.state.sections.map(({informacion, foto, id}) => (
                        <NuevasFotos key={id} title={informacion} imageUrl={foto} />
                    ))
                }

            </div>
        )
        }

}

export default Nuevas