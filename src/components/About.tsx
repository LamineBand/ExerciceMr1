import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Restaurant PROFI" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <h2 className="display-5 fw-bold mb-4">PROFI Restaurant</h2>
              <p className="lead text-muted mb-4">
                Découvrez une expérience culinaire exceptionnelle dans notre restaurant situé au cœur de New York City.
              </p>
              <p className="text-muted mb-4">
                Notre équipe de chefs passionnés vous propose une cuisine raffinée mêlant traditions méditerranéennes 
                et innovations contemporaines. Chaque plat est préparé avec des ingrédients frais et de qualité, 
                dans le respect des saveurs authentiques.
              </p>
              <p className="text-muted mb-4">
                Que ce soit pour un dîner romantique, un repas d'affaires ou une célébration spéciale, 
                notre restaurant vous offre un cadre élégant et une atmosphère chaleureuse pour tous vos moments précieux.
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">15+</h3>
                    <p className="text-muted">Années d'expérience</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <h3 className="text-primary fw-bold">50+</h3>
                    <p className="text-muted">Plats signature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;