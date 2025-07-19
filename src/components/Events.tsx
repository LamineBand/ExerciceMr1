import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Soirée Grecque",
      date: "28 Avril 2025",
      description: "Découvrez les saveurs authentiques de la Grèce avec notre menu spécial et ambiance méditerranéenne.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Dégustation de Vins",
      date: "15 Mai 2025",
      description: "Une soirée dégustation avec notre sommelier pour découvrir les meilleurs accords mets-vins.",
      image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="events" className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <p className="text-muted mb-2">Nos dernières actualités</p>
            <h2 className="display-5 fw-bold">Actualités & Événements</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="d-flex align-items-center justify-content-lg-end">
              <Mail size={24} className="me-2 text-primary" />
              <span className="text-muted">Newsletter</span>
            </div>
          </div>
        </div>

        <div className="row">
          {events.map(event => (
            <div key={event.id} className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100 event-card">
                <div 
                  className="card-img-top event-image"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    position: 'relative'
                  }}
                >
                  <div className="event-overlay">
                    <div className="event-content p-4">
                      <h3 className="text-white fw-bold mb-2">{event.title}</h3>
                      <div className="d-flex align-items-center text-white-50 mb-3">
                        <Calendar size={16} className="me-2" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-white mb-3">{event.description}</p>
                      <a href="#" className="btn btn-outline-light">
                        En savoir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5">
            Voir tous les événements
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;