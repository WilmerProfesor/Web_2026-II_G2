import React from 'react'
import LogoMain from "../../../public/monkey.png"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <h1>Title</h1>
        <img src={LogoMain} alt="Logo Principal" />
        <p>Este es mi primer App-web copn React</p>
    </header>
  )
}

export default Header