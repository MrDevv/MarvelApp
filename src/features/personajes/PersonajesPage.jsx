import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Search } from '../../components/Search';
import { SpinnerLoading } from '../../components/SpinnerLoading';
import { getHeroesByName } from '../../utils/helpers/getHeroesByName';

const valuesPersonajes = {
    personajesLS: [],
    isLoading: true
}

export const PersonajesPage = () => {

    const { character } = useParams();    
    console.log(character);

    const [personajes, setPersonajes] = useState(valuesPersonajes);
    
    useEffect(() => {
      const cargarPersonajes = async() => {
        setPersonajes(valuesPersonajes)
        const newPersonajes =await getHeroesByName(character);    
        setPersonajes({personajesLS: newPersonajes, isLoading: false});
      }
        cargarPersonajes(); 
    }, [character])  
  
    return (    
      <div className="container">        
          <div className="container-input">
              <Search setPersonajes={setPersonajes}/>
          </div>
          <div className="grid-personaje">
            {
              (personajes.isLoading)
              ?
              (<SpinnerLoading/>)
              :
              (
                (personajes.personajesLS.length===0)
                ?
                <h1 className='center p-sin-resultados'>No hay resultados</h1>      
                :
                personajes.personajesLS.map(personaje => (
                  <div key={personaje.id} className="card-personaje">
                       <div className="fondo">
                         <img src={personaje.image} alt="spiderman" />
                       </div>                
                       <h1>{personaje.name}</h1>              
                     </div>
                ))
                )
            }
          </div>
      </div>
    )
}
