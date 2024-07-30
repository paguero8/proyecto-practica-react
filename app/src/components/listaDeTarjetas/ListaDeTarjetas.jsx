import React from 'react';
import './ListaDeTarjetas'
import './ListaDeTarjetas.css'
import Tarjeta from '../tarjeta/Tarjeta'

const ListaDeTarjetas = ({tarjetas}) => {
    return(
        <section>
            <h2 className="card-titulo">Tarjetas</h2>
            <div className="card-conteiner">
                {tarjetas.map(tarjeta => (
                    <Tarjeta key ={tarjeta.id} {...tarjeta}/>
                ))}
            </div>
        </section>
    )
}

export default ListaDeTarjetas