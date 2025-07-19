import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4">Galerie</h2>
          <p className="lead text-muted">Découvrez l'ambiance et les créations de notre restaurant</p>
        </div>

        <div className="row g-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <div 
                  className="gallery-image"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline-primary btn-lg">
            Voir plus de photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;