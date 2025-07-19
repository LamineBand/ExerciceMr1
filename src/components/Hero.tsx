import React from 'react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h4 className="hero-subtitle mb-3">
                Sea food, Italian, Mediterranean
              </h4>
              <h1 className="hero-title mb-4">
                Restaurant in New York City
              </h1>
              <div className="hero-buttons">
                <button className="btn btn-secondary btn-lg me-3">
                  Voir la carte
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  onClick={scrollToMenu}
                >
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;