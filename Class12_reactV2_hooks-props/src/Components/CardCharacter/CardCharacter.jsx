import React from 'react'
import './CardCharacter.css'

const CardCharacter = (props) => {
    const { name, species, gender, image } = props.character
  return (
    <div id="cardCharacter">
        <h2>{name}</h2>
        <p>Especie: {species}</p>
        <p>Género: {gender}</p>
        <img src={image} alt={name} />
    </div>
  )
}

export default CardCharacter