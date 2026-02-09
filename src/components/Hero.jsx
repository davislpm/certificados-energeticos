import React from 'react';
import './Hero.css';
import HeroImage from '../images/Hero.png'; // imagen desde src/images

const Hero = () => (
  <>
    {/* Hero principal */}
    <header id="hero" className="hero">
      <img src={HeroImage} alt="Madrid eficiencia energética" className="hero-img" />
      <div className="hero-content">
        <h1>Certificado Energético en Madrid</h1>
        <p>Entrega en 24 – 48h · Arquitecto titulado · Desde 50€</p>
        <a
          href="https://wa.me/689293402"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </header>

  </>
);

export default Hero;
