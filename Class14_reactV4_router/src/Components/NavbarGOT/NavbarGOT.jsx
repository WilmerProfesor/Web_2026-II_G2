import React, { useState, useEffect } from 'react';
import './NavbarGot.css';
import { Link } from "react-router-dom"

const MENU_ITEMS = [
  { id: 'inicio', label: 'Inicio', link: '#' },
  { id: 'hombres', label: 'Hombres', link: '#' },
  { id: 'mujeres', label: 'Mujeres', link: '#' },
];

export const NavbarGot = ({ activeItem = 'inicio', onSelect }) => {
  const [gender, setGender]= useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(activeItem);


  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleClick = (id) => {
    setCurrent(id);
    setIsOpen(false);
    if (onSelect) onSelect(id);
    if(id=="hombres"){
      alert("Hombres")
    }else if(id=="mujeres"){
      alert("Mujeres")
    }
  };

  return (
    <nav className="got-nav-wrapper">
      <div className="got-nav-container">
        {/* Título o Sigilo de contexto */}
        <div className="got-nav-brand">
          <span className="brand-crest">⚔</span>
          <span className="brand-title">Westeros</span>
        </div>

        {/* Botón Dragón Móvil */}
        <button
          className={`got-dragon-btn ${isOpen ? 'active' : ''}`}
          onClick={handleToggle}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          {/* SVG vectorial de silueta de dragón heráldico */}
          <svg
            className="dragon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.5 7.5C18 4.5 15.5 3 13 3c-3 0-5 2-6 4L3 8.5l1.5 3L8 11c.5 1.5 1.5 3 3 4l-1 4.5 3-1.5 2 2.5 1.5-3.5 3-1c.5-.5.5-2.5-.5-3.5l1.5-1.5c1-1 1-2.5 0-3.5z" />
            <path d="M12 9l-2 2" />
            <circle cx="16.5" cy="5.5" r=".75" fill="currentColor" />
          </svg>
          <span className="dragon-glow" />
        </button>

        {/* Lista de Navegación */}
        <ul className={`got-menu-list ${isOpen ? 'open' : ''}`}>
          {MENU_ITEMS.map((item) => {
            const isSelected = current === item.id;
            return (
              <li key={item.id} className="got-menu-item">
                <Link
                  to={item.link}
                  className={`got-menu-link ${isSelected ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id);
                  }}
                >
                  <span className="link-diamond">◆</span>
                  <span className="link-text">{item.label}</span>
                  <span className="link-diamond">◆</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Línea inferior decorativa estilo acero valyrio */}
      <div className="got-nav-border-bottom">
        <span className="nav-accent-rune">✦</span>
      </div>
    </nav>
  );
};

export default NavbarGot;