import React from 'react';
import './Pricing.css';

const Pricing = () => (
  <section id="pricing" className="section pricing-wrapper">
    <div className="pricing">
      <h2 className="pricing-title">Precios orientativos</h2>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Piso &lt; 90 m²</h3>
          <p className="price">50 € + IVA</p>
        </div>

        <div className="pricing-card">
          <h3>Piso 90–140 m²</h3>
          <p className="price">90 € + IVA </p>
        </div>

        <div className="pricing-card highlight">
          <h3>Unifamiliar / Urgente</h3>
          <p className="price">+20 €</p>
        </div>
      </div>

      <p className="pricing-note">
        *Precios orientativos. Para casos especiales, consúltanos sin compromiso.
      </p>
    </div>
  </section>
);

export default Pricing;
