import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import './CardDetail.css';

const DEFAULT_CHARACTER = {
    fullName: "Daenerys Targaryen",
    title: "Madre de Dragones, La que no Arde, Rompedora de Cadenas",
    family: "Casa Targaryen",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
};

// {
//   fullName,
//   title ,
//   family,
//   image,
//   onClose
// }

export const CardDetail = (
    {
        fullName = DEFAULT_CHARACTER.fullName,
        title = DEFAULT_CHARACTER.title,
        family = DEFAULT_CHARACTER.family,
        imageUrl = DEFAULT_CHARACTER.image,
        onClose
    }
) => {
    const [data, setData] = useState(null);

    const url = useParams();
    console.log(url);

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters/3")
            .then(response => response.json())
            .then(character => {
                setData(character);
                console.log("dddddd" + character)
            })
    }, []);

    const cardRef = useRef(null);
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlarePosition({ x, y, opacity: 0.45 });
    };

    const handleMouseLeave = () => {
        setGlarePosition(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <>
            { data!=null?
            <div className="got-detail-overlay">
                <div
                    ref={cardRef}
                    className="got-detail-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Destello de luz metálica interactivo */}
                    <div
                        className="got-detail-glare"
                        style={{
                            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(212, 175, 55, 0.25), transparent 70%)`,
                            opacity: glarePosition.opacity
                        }}
                    />

                    {/* Marco y esquinas forjadas */}
                    <div className="detail-corner corner-tl">◤</div>
                    <div className="detail-corner corner-tr">◥</div>
                    <div className="detail-corner corner-bl">◣</div>
                    <div className="detail-corner corner-br">◢</div>

                    {onClose && (
                        <button
                            type="button"
                            className="got-detail-close-btn"
                            onClick={onClose}
                            aria-label="Cerrar detalle"
                        >
                            ✕
                        </button>
                    )}

                    {/* Columna Izquierda: Retrato */}
                    <div className="got-detail-portrait-section">
                        <div className="got-detail-img-frame">
                            <img
                            src={data.imageUrl||
                                "data:image/png;base64,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"
                            }
                            alt={data.fullName}
                            className="got-detail-img"
                            loading="lazy"
                        />
                            <div className="got-detail-img-vignette" />
                            <div className="got-detail-crest-seal">
                                <span className="seal-rune">🐉</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Información Principal */}
                    <div className="got-detail-info-section">
                        <header className="got-detail-header">
                            <div className="family-badge">
                                <span className="badge-sparkle">✦</span>
                                <span className="badge-text">{data.family}</span>
                                <span className="badge-sparkle">✦</span>
                            </div>

                            <h1 className="got-detail-name">{data.fullName}</h1>
                            <p className="got-detail-honorific">{data.title}</p>
                        </header>

                        <div className="got-detail-divider">
                            <span className="detail-line" />
                            <span className="detail-sigil">⚔</span>
                            <span className="detail-line" />
                        </div>

                        <div className="got-detail-body">
                            <div className="chronicle-block">
                                <span className="chronicle-label">Linaje y Registro</span>
                                <p className="chronicle-text">
                                    Perteneciente al ilustre registro de la <strong>{family}</strong>.
                                    Reconocido en las crónicas de los Siete Reinos bajo las dignidades de <em>"{title}"</em>.
                                </p>
                            </div>

                            <div className="got-attribute-pills">
                                <div className="attr-pill">
                                    <span className="attr-title">Nobleza</span>
                                    <span className="attr-value">{data.family}</span>
                                </div>
                                <div className="attr-pill">
                                    <span className="attr-title">Reino</span>
                                    <span className="attr-value">Poniente</span>
                                </div>
                            </div>
                        </div>

                        <footer className="got-detail-footer">
                            <span className="footer-runes">VALAR MORGHULIS • VALAR DOHAERIS</span>
                        </footer>
                    </div>
                </div>
            </div>
            :
            "No hay datos"
    }
        </>
    );
};

export default CardDetail;