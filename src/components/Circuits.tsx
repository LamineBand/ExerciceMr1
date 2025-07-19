import React from 'react';

const Circuits: React.FC = () => {
  const circuits = [
    {
      id: 1,
      title: "Mystères du Japon : Entre Tradition et Modernité",
      description: "Explorez le Japon en visitant Tokyo, Kyoto et Nara. Découvrez les contrastes entre la technologie futuriste et les temples ancestraux, assistez à une cérémonie du thé et admirez les cerisiers en fleurs au printemps."
    },
    {
      id: 2,
      title: "Aventure en Namibie : Déserts et Faune Sauvage",
      description: "Partez à la découverte des dunes rouges de Sossusvlei, observez les animaux du parc d'Etosha et explorez la mystérieuse côte des Squelettes. Un voyage idéal pour les amoureux de nature et de paysages spectaculaires."
    },
    {
      id: 3,
      title: "Les Merveilles de la Patagonie : Entre Glaciers et Sommets",
      description: "Traversez l'Argentine et le Chili à la découverte des montagnes du Fitz Roy, des glaciers impressionnants comme le Perito Moreno et des fjords sauvages. Un voyage inoubliable pour les amateurs de trekking et de grands espaces."
    }
  ];

  return (
    <section id="circuits" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Nos Circuits</h2>
            <div className="title-divider mx-auto mb-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="circuitsAccordion">
              {circuits.map((circuit, index) => (
                <div key={circuit.id} className="accordion-item mb-3 border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${circuit.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${circuit.id}`}
                    >
                      {circuit.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${circuit.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#circuitsAccordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-3">{circuit.description}</p>
                      <a href="#" className="btn btn-outline-primary">Voir les détails</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circuits;