import React from 'react'
import "./Header.css"
import pepe from "../../assets/Naruto_logo.svg"

const Header = () => {
  return (
    <header>
        <img src={pepe} alt="" />
        <h2>«Jamás retrocederé a mi palabra, porque ese es mi camino ninja»</h2>
        <img src={"https://file.aiquickdraw.com/imgcompressed/img/compressed_6f833f6de10d6f6cb951018759ab4bfc.webp"} alt="" />
    </header>
  )
}

export default Header