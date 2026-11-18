import React from 'react'
import "./DetailPage.css"
import CardCharacterDetail from '../../Components/CardCharacterDetail/CardCharacterDetail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const DetailPage = () => {
  const [character, setCharacter]= useState(null)

  const id= useParams().id;
  console.log(id)

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=>res.json())
    // .then(data=>console.log(data));
    .then(data=>setCharacter(data));
  },[])

  return (
    <div id='detailPage'>
        {
          character!=null?
          <CardCharacterDetail props={character}/>
          :"No hay datos"
        }
    </div>
  )
}

export default DetailPage