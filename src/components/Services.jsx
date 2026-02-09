import React from 'react';
import './Services.css';
import { FaHome, FaFileAlt, FaBuilding, FaTag } from 'react-icons/fa';

const servicesList = [
  {
    icon: <FaHome />,
    title: 'Visita al inmueble',
    desc: 'Toma de datos y mediciones necesarias',
  },
  {
    icon: <FaFileAlt />,
    title: 'Informe oficial',
    desc: 'Documento válido para venta o alquiler',
  },
  {
    icon: <FaBuilding />,
    title: 'Registro oficial',
    desc: 'Inscripción en la Comunidad de Madrid',
  },
  {
    icon: <FaTag />,
    title: 'Etiqueta energética',
    desc: 'Clasificación energética oficial',
  },
];

const Services = () => (
  <section id="process" className="section services">
    <h2 className="services-title">¿Qué incluye el servicio?</h2>
    <p className="services-subtitle">
      Todo lo necesario para obtener tu certificado energético de forma rápida y sencilla.
    </p>

    <div className="services-grid">
      {servicesList.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>

    <p className="services-note">
      ✔ Certificado válido legalmente en toda España
    </p>

  </section>
);

export default Services;
