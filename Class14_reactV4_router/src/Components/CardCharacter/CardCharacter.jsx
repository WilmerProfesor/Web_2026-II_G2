import React, { useRef, useState } from 'react';
import './CardCharacter.css';

// export const Cardprops = ({ props = DEFAULT_props }) => {
export const Cardprops = (props) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="got-card-container">
      <article
        ref={cardRef}
        className="got-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        {/* Reflejo metálico dinámico */}
        <div
          className="got-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(212, 175, 55, 0.35), transparent 60%)`,
            opacity: glare.opacity
          }}
        />

        {/* Marco y textura de fondo */}
        <div className="got-card-frame">
          <span className="corner-ornament top-left">◆</span>
          <span className="corner-ornament top-right">◆</span>
          <span className="corner-ornament bottom-left">◆</span>
          <span className="corner-ornament bottom-right">◆</span>

          <div className="got-image-wrapper">
            <img
              src={props.image}
              alt={props.fullName}
              className="got-image"
              loading="lazy"
            />
            <div className="got-image-overlay" />
            {/* <div className="got-status-badge">
              <span className={`status-indicator ${props.status.toLowerCase()}`} />
              {props.status}
            </div> */}
            {/* <div className="got-sigil-icon" title={props.family}>
              {props.family}
            </div> */}
          </div>

          <div className="got-content">
            <span className="got-house-tag">{props.family}</span>
            <h2 className="got-name">{props.fullName}</h2>
            <p className="got-title">{props.title}</p>

            {/* <blockquote className="got-quote">
              “{props.quote}”
            </blockquote> */}

            <div className="got-divider">
              <span className="divider-line" />
              <span className="divider-gem">⚔</span>
              <span className="divider-line" />
            </div>

            {/* <dl className="got-stats-grid">
              <div className="stat-item">
                <dt>Lealtad</dt>
                <dd>{props.allegiance}</dd>
              </div>
              <div className="stat-item">
                <dt>Cultura</dt>
                <dd>{props.culture}</dd>
              </div>
              <div className="stat-item">
                <dt>Intérprete</dt>
                <dd>{props.actor}</dd>
              </div>
            </dl> */}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cardprops;