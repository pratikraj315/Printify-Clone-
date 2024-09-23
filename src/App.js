import React from 'react';
import './index.css';
import Footer from './assets/components/Footer';
import Hero from './assets/components/Hero';
import Navbar from './assets/components/Navbar';
import Testimonials from './assets/components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
