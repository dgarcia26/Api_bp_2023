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
    <div>
        <div className='container'>
        <h1 className='text-center'>Yu-Gi-Ho Cartas de Duelos</h1>
        <div class="btn-group text-center container" role="group">
        <button class="btn btn-danger" onClick={atras}>Atrás</button>
        <button  class="btn btn-primary" onClick={traerPersonajes}>Traer Personajes</button>
        <button class="btn btn-success" onClick={siguiente}>Siguiente</button>  
        </div>
        <hr />
        {
            personajes.map((aux)=> (
                
                <div key={aux.id}>
                <div class="card-body">
                <h4 className='text-center card-title'><b>{aux.name}</b></h4>
                <img src={aux.card_images[0].image_url} class="rounded mx-auto d-block" alt="prueba"/>
                <h4><b>Descripcion: </b></h4><span><p>{aux.desc}</p></span>
                <hr />
                </div>
                
            </div>
            ))
            
        }
        </div>
    </div>
  )
}

export default PeticionApi_yugiho