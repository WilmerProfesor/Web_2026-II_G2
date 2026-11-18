import React from 'react'
import "./CardCharacterDetail.css"

const CardCharacterDetail = ( {props} ) => {
  return (
    <div id='articleDetail'>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
      <p>{props.gender}</p>
      <p>{props.species}</p>
      <p>{props.status}</p>
      <p>{props.url}</p>
      <p>{props.created}</p>
    </div>
  )
}

export default CardCharacterDetail