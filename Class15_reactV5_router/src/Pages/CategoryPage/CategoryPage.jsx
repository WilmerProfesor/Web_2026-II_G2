import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import "./CategoryPage.css"
import CardCharacter from '../../Components/CardCharacter/CardCharacter'

const CategoryPage = () => {
  const [characters, setCharacters]= useState([]);
  const [filters, setFilters]= useState([]);
  const gender=useParams().type;

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(res=>res.json())
    // .then(data=>console.log(data.results))
    .then(data=>{
      setCharacters(data.results)
      return data.results;
    })

    .then(data=>setFilters(data.filter(item=>item.gender==gender)))
  },[gender]);

  
  return (
    <main>
        {
          filters.length>0?
          filters.map((character)=>{
            return(
              <Link id="link" key={character.id} to={`../../details/${character.id}`} >
                <CardCharacter  props={character}/>
              </Link>
            )
          })
          :"no hay datos"
        }
    </main>
  )
}

export default CategoryPage