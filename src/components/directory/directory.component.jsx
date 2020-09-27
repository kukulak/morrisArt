import React from 'react';
import Coleccion from '../../components/coleccion/coleccion.component';
import './directory.styles.scss'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


class Directory extends React.Component{
    constructor(){
        super();
        
        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-001.png

        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-002.png

        this.state = {
           sections:[
            {
                "id": 4,
                "coleccion": "lukayotl",
                "foto": "https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/LUKAYOTL_nqdjDaz.png",
                "informacion": "",
                "link": ""
            },   
            {
                "id": 1,
                "coleccion": "sili",
                "foto": "https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/SILI_hdgPM3E.png",
                "informacion": "sili es caracol en grecoromani azteka",
                "link": ""
            },
            {
                "id": 2,
                "coleccion": "sili mexika",
                "foto": "https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/SILIMEXICA_lt5vWyw.png",
                "informacion": "",
                "link": ""
            },
            {
                "id": 3,
                "coleccion": "lukayotl mexica",
                "foto": "https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/lukayotlMexika_IjjUJG8.png",
                "informacion": "",
                "link": ""
            }
            ]
        }
    }    

    render(){
        return(
            <div className='directory-menu'>

                {
                    this.state.sections.map(({title, foto, id}) => (
                        <Coleccion
                            key={id}
                            title={title}
                            imageUrl={foto}
                        />
                    ))
                }

            </div>
        )
        }

}

// data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
// data-aos-duration="1000"
// data-aos-easing="ease-in-out"
// data-aos-mirror="true"
// data-aos-once="false"
// data-aos-anchor-placement="top-center"

// ..
AOS.init();

export default Directory