import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import Events from './components/Events';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Quote />
      <Events />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;