import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import HomePage from "./Pages/HomePage/HomePage"
import CategoryPage from "./Pages/CategoryPage/CategoryPage"
import DetailPage from './Pages/DetailPage/DetailPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

const App = () => {
  return (
    <>
      <Router>        
        <Header/>
        <Nav/>        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/category/:type" element={<CategoryPage/>} />
          <Route path="/details/:id" element={<DetailPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App