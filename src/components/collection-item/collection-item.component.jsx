import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, nombre, fotoPrimera, fotoSegunda}) => (

    <div className='productDisplay'> 
      
        <div
            className='imagesItems'
        >
                  

                    <img className='fotoProducto'src={fotoPrimera} alt={nombre}/>
                    <img className='fotoProductoTop'src={fotoSegunda} alt={nombre}/>

        </div>
        <div className='CollectionFooter'>
            <button> Especificaciones </button>
            <h2 className='productName'> {nombre.toUpperCase()}</h2>
        </div>
    </div>
)

export default CollectionItem