import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          CertificadosEnergéticos
        </div>

        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li><a href="#what-is">¿Qué es?</a></li>
          <li><a href="#process">Servicio</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><a href="#footer">Contacto</a></li>
        </ul>

        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </nav>
    </header>
  );
}

export default Menu;
