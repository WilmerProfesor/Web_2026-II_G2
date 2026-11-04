import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo" />
        <div id="header-text">
            <h1>Title App</h1>
            <p>Este es el Slogan de mi App</p>
        </div>
    </header>
  )
}

export default Header