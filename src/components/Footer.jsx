import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-container">
      
      {/* Columnas */}
      <div className="footer-columns">

        {/* Servicios */}
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li>Certificado energético</li>
            <li>Visita al inmueble</li>
            <li>Informe oficial</li>
            <li>Etiqueta energética</li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:david.lpmartin@gmail.com">david.lpmartin@gmail.com</a></li>
            <li><a href="tel:+34689293402">+34 689 293 402</a></li>
            <li><a href="https://wa.me/689293402" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-col">
          <h4>Síguenos</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/689293402" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2026 David Lopez Martin</p>
      </div>

    </div>
  </footer>
);

export default Footer;
