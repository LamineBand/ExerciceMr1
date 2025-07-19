import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    destination: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Gardons le contact</h2>
            <div className="title-divider mx-auto mb-4"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label fw-semibold">Votre Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Votre adresse électronique</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-text">Vos données personnelles seront protégées</div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="destination" className="form-label fw-semibold">Votre destination d'intérêt</label>
                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Ex: Japon, Grèce, Bali..."
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">Votre message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Écrivez votre message ici..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-5 py-2">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;