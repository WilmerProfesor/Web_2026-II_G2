import { useState, useEffect } from 'react'
import "./Main.css"
import CardCharacter from '../CardCharacter/CardCharacter'
import CardCharacter2 from '../CardCharacter2/CardCharacter2'

const Main = () => {

  const [personajes, setPersonajes]= useState([])

  useEffect(()=>{
    fetch("https://dattebayo-api.onrender.com/characters")
    .then(results=>results.json())
    .then(data=>setPersonajes(data.characters))
  },[])

  return (
    <main>
      {/* {
        personajes.map(personaje=>{
          return(
            <CardCharacter image={personaje.images[0]} name={personaje.name} sex={personaje.personal.sex} birthdate={personaje.personal.birthdate}/>
          )
        })
      } */}
      <CardCharacter2/>
    </main>
  )
}

export default Main