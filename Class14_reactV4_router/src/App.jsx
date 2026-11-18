import React from 'react'
import "./App.css"
//componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import NavbarGot from './Components/NavbarGOT/NavbarGOT'
import CardDetail from './Components/CardDetail/CardDetail'

const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
          <NavbarGot/>
          
          <Main/>
          <CardDetail />
        <Routes>
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <CardDetail  image={"https://thronesapi.com/assets/images/jon-snow.jpg"} fullName={"Jon Snow"} title={"King of the North"} family={"House Stark"}/> */}

    </>
  )
}

export default App