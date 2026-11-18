import React from 'react'
import "./CardCharacter.css"

const CardCharacter = ( {props} ) => {
  return (
    <article>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
      <p>{props.gender}</p>
      <p>{props.species}</p>
      <p>{props.status}</p>
    </article>
  )
}

export default CardCharacter