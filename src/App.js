import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhatIsCertificate from './components/WhatIsCertificate';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <div className="container">
      <Hero />
      <WhatIsCertificate />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
