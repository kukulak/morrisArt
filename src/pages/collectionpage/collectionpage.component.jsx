import React from 'react';

import '../homepage/homepage.styles.scss'

import CollectionPreview from'../../components/collection-preview/collection-preview.component'
import COLLECTION_DATA from './collection.data.js';


import Nuevas from '../../components/nuevas/nuevas.component';
import FullMenu from '../../components/menu/fullmenu.component';
import Footer from '../../components/footer/footer.component';
import Contacto from '../../components/contacto/contacto.component'



class CollectionPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collections: COLLECTION_DATA
        };

    }
    render(){
        const {collections} = this.state;
        return (<div className='collection-page'>

            <FullMenu />
            <div className="indicator"></div>
            <div className="noiseDiv"></div>
            {/* <div className='titulo'>COLECCIONES</div> */}

            {
                collections.map(({ id, ...otherCollectionProps }) => ( <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }

          
            <div className='titulo'>NUEVAS CREACIONES</div>
            <Nuevas />
            <Contacto/>
            <Footer />

        </div>);





    }

}

export default CollectionPage