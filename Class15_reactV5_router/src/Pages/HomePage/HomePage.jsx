import "./HomePage.css"
import CardCharacter from "../../Components/CardCharacter/CardCharacter.jsx"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const HomePage = () => {

  const [characters, setCharacters]= useState([]);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(res=>res.json())
    // .then(data=>console.log(data.results))
    .then(data=>setCharacters(data.results))
  },[]);

  return (
    <main>
        {
          characters.map((character)=>{
            return(
              <Link id="link" key={character.id} to={`details/${character.id}`} >
                <CardCharacter  props={character}/>
              </Link>
            )
          })
        }
    </main>
  )
}

export default HomePage