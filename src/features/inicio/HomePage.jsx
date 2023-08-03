import React, { useEffect } from 'react'
import { useState } from 'react';
import { Search } from '../../components/Search';
import { SpinnerLoading } from '../../components/SpinnerLoading';
import { getHeroes } from '../../utils/helpers/getHeroes';


export const HomePage = () => {
  const personajesLS = JSON.parse(localStorage.getItem('personajes')) || [];

  const [personajes, setPersonajes] = useState({
    personajesLS: personajesLS,
    isLoading: (personajesLS.length===0)
  });


  useEffect(() => {
    const cargarPersonajes = async() => {
      const newPersonajes =await getHeroes();    
      console.log(newPersonajes);
      console.log('llamando a la funcion de cargar Personajes');
      setPersonajes({personajesLS: newPersonajes, isLoading: false});
      console.log(personajes);
      localStorage.setItem('personajes', JSON.stringify(newPersonajes));
    }
    console.log(personajesLS.length);
    if (personajesLS.length===0) {
      console.log('cargando personajes');
      cargarPersonajes();
    }    
  }, [])  
  
  // console.log(personajes);

  return (    
    <div className="container">
        <div className="container-input">
            <Search/>
        </div>
        <div className="grid-personaje">
          {
            (personajes.isLoading)
            ?
            (<SpinnerLoading/>)
            :                       
              personajes.personajesLS.map(personaje => (
                <div key={personaje.id} className="card-personaje">
                     <div className="fondo">
                       <img src={personaje.image} alt="spiderman" />
                     </div>                
                     <h1>{personaje.name}</h1>              
                   </div>
              ))
            
          }
        </div>
    </div>
  )
}
