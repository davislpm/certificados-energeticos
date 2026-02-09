import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Menu from './components/Menu';
import WhatIsCertificate from './components/WhatIsCertificate';
import Footer from './components/Footer';


import './styles.css';

function App() {
  return (
    <div className="container">
      <Menu />
      <Hero />
      <WhatIsCertificate />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
