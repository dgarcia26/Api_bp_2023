import React from 'react'
import { useState } from 'react'

const PeticionApi_yugiho = () => {
    const [personajes, setPersonajes] = useState([])
    const [paginacion, setPaginacion] = useState(1)

    const traerPersonajes = async() =>{
        try{
            const res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=${(paginacion - 1) * 5}`)
            const respuesta = await res.json()
            const auxPersonajes = respuesta.data
            setPersonajes(auxPersonajes)
        }catch(error){
            console.log(error)
        }
    }
    const siguiente = () => {
        setPaginacion(paginacion + 1);
        traerPersonajes();
    };
    
    const atras = () => {
        if (paginacion > 1) {
          setPaginacion(paginacion - 1);
          traerPersonajes();
        }
    };

  return (
    <div>PeticionApi_yugiho</div>
  )
}

export default PeticionApi_yugiho