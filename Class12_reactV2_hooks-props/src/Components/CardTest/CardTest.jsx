import React from 'react'
import './CardTest.css'

const CardTest = ( props ) => {
    const { title, message } = props
  return (    
    <div id="cardTest">
        <h2>{title}</h2>
        <p>Me pasaron: {props.message}</p>
    </div>
  )
}

export default CardTest