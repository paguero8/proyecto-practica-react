import React from 'react';
import './Tarjeta'
import './Tarjeta.css'

const Tarjeta = ({titulo, descripcion, imagen}) => {

    return(
        <section className='card-section'>
            <h2 className="card-titulo-tarjeta">{titulo}</h2>
            <p className="card-descripcion">{descripcion}</p>
            <div>
                <img src={imagen} alt={titulo} className="card-imagen" />
            </div>
        </section>
    )
}

export default Tarjeta