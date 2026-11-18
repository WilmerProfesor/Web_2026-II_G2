import { useState, useEffect } from 'react'
import "./Main.css"
import CardCharacter from '../CardCharacter/CardCharacter'

const Main = () => {

  const [personajes, setPersonajes]= useState([])

  useEffect(()=>{
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(results=>results.json())
    .then(data=>setPersonajes(data))
  },[])

  return (
    <main>
      {
        personajes.map(personaje=>{
          return(
            <a href={`/character/${personaje.id}`}>
              <CardCharacter key={personaje.id} image={personaje.imageUrl} fullName={personaje.fullName} title={personaje.title} family={personaje.family}/>
            </a>
          )
        })
      }
      {/* <CardCharacter/> */}
    </main>
  )
}

export default Main