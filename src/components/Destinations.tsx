import React from 'react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      title: "Santorin, Grèce",
      description: "Découvrez l'île de Santorin avec ses maisons blanches aux dômes bleus surplombant la mer Égée. Un cadre idyllique pour un voyage romantique et ensoleillé.",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Kyoto, Japon",
      description: "Plongez dans l'histoire et la sérénité de Kyoto, où temples traditionnels et cerisiers en fleurs créent une atmosphère unique entre culture et nature.",
      image: "https://images.pexels.com/photos/161251/senso-ji-temple-asakusa-tokyo-japan-161251.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Bali, Indonésie",
      description: "Entre plages paradisiaques, rizières en terrasse et temples mystiques, Bali est une invitation à l'évasion et à la découverte spirituelle.",
      image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="destinations" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Destinations</h2>
            <div className="title-divider mx-auto mb-4"></div>
          </div>
        </div>
        <div className="row g-4">
          {destinations.map(destination => (
            <div key={destination.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm destination-card">
                <div 
                  className="card-img-top destination-image"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '250px'
                  }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{destination.title}</h5>
                  <p className="card-text text-muted">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;