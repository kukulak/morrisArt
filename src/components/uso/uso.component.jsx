import React from 'react';
import './uso.styles.scss'


import Fotosdeuso from '../../components/fotosdeuso/fotosdeuso.component';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


class Uso extends React.Component{
    constructor(){
        super();
        
        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-001.png

        // https://valderramakelly.pythonanywhere.com/media/colecciones/%25%20Y/%25%20m/%25%20d/separadorColor-002.png

        this.state = {
           sections:[
            {
                "id": 4,
                "coleccion": "lukayotl",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/uso-001-DSC_1611_6A4wzGE.png",
                "informacion": "",
                "link": ""
            },   
            {
                "id": 1,
                "coleccion": "sili",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/uso-002-DSC_1611.png",
                "informacion": "sili es caracol en grecoromani azteka",
                "link": ""
            },
            {
                "id": 5,
                "coleccion": "sili mexika",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/uso-005-DSC_1611.png",
                "informacion": "",
                "link": ""
            },
            {
                "id": 6,
                "coleccion": "sili",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/uso-006-DSC_1611.png",
                "informacion": "sili es caracol en grecoromani azteka",
                "link": ""
            },
            {
                "id": 2,
                "coleccion": "sili mexika",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/uso-003-DSC_1611.png",
                "informacion": "",
                "link": ""
            },
            {
                "id": 3,
                "coleccion": "lukayotl mexica",
                "foto": "https://valderramakelly.pythonanywhere.com/media/products/2020/09/24/uso-004-DSC_1611.png",
                "informacion": "",
                "link": ""
            }
            ]
        }
    }    

    render(){
        return(
            <div className='classUso'>

                {
                    this.state.sections.map(({foto, id}) => (
                        <Fotosdeuso
                            key={id}
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


export default Uso