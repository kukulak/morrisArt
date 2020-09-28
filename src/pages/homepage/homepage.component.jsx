import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component';
import Herobanner from '../../components/herobanner/herobanner.component';
import Palabrasinter from '../../components/palabrasinter/palabrasinter.component'
import Uso from '../../components/uso/uso.component';
import PalabrasMorris from '../../components/palabrasmorris/palabrasmorris.component';
import Nuevas from '../../components/nuevas/nuevas.component';
import FullMenu from '../../components/menu/fullmenu.component';
import Footer from '../../components/footer/footer.component';
import Contacto from '../../components/contacto/contacto.component'


const HomePage = () =>(
    
    <div className='homepage'>
        <FullMenu />
        <div className="indicator"></div>
		<div className="noiseDiv"></div>
        <Herobanner />
        <div className='titulo'>COLECCIONES</div>
        <Directory />
        <Palabrasinter />
        <Uso />
        <PalabrasMorris/>
        <div className='titulo'>NUEVAS CREACIONES</div>
        <Nuevas />
        <Contacto/>
        <Footer />
    </div>
);

export default HomePage