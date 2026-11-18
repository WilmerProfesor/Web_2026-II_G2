import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link id='link' to="/">Inicio</Link>
            </li>
            <li>                
                <Link id='link' to="/category/Male">Hombre</Link>                
            </li>
            <li>
                <Link id='link' to="/category/Female">Mujer</Link>                                
            </li>
        </ul>
    </nav>
  )
}

export default Nav