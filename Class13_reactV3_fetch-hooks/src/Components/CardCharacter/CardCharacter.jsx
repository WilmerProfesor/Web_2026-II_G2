import React from 'react'
import "./CardCharacter.css"

const CardCharacter = (props) => {
  return (
    <div id='cardContent'>
        <h2>{props.name || "Sin nombre"}</h2>
        <img src={props.image} alt={props.name} />
        <p>Cumpleaños: {props.birthdate}</p>
        <p>Sexo: {props.sex}</p>
    </div>
  )
}

export default CardCharacter