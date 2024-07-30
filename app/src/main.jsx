import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import invierno from './assets/invierno.jpg'
import primavera from './assets/primavera.jpg'
import verano from './assets/verano.jpg'


const datos = [
  {id: 1, titulo: 'Invierno', descripcion: 'Se caracteriza por ser una de las cuatro estaciones de las zonas templadas. Días más cortos, noches más largas y temperaturas más bajas.', imagen: invierno},
  {id: 2, titulo: 'Primavera', descripcion: 'Es propia de las zonas templadas y corresponde a un tiempo intermedio, entretiempo, entre la estación fría, el invierno, y la cálida, el verano.', imagen: primavera},
  {id: 3, titulo: 'Verano', descripcion: 'Es una de las cuatro estaciones de las zonas templadas. Es la más cálida de ellas.', imagen: verano}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App datos = {datos}/>
  </React.StrictMode>,
)
