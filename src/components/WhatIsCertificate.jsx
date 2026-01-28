import React from 'react';
import './WhatIsCertificate.css';
import WhatisImg from '../images/Cert.png'; // imagen desde src/images

const WhatIsCertificate = () => (
  <section className="what-is">
    <h2 className="what-is-title">
      ¿Qué es un Certificado Energético?
    </h2>

    <div className="what-is-grid">
      <div className="what-is-text">
        <p>
          El certificado energético es un <strong> documento oficial obligatorio</strong> que
          indica la eficiencia energética de una vivienda o local.
        </p>
        <p>
          Evalúa el <strong>consumo de energía</strong> y las <strong>emisiones de CO₂</strong>.
        </p>
        <p>
          El resultado es una <strong>calificación energética</strong> que va desde
          la letra <strong>A</strong> (más eficiente) hasta la <strong>G</strong>
          (menos eficiente).
        </p>
      </div>

      <div className="what-is-visual">
       <img src={WhatisImg} alt="Que es certificado energético" className="what-is-visual-img" />
      </div>
    </div>
  </section>
);

export default WhatIsCertificate;
