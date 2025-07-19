import React, { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Réservation soumise:", formData);
    alert("Merci pour votre réservation ! Nous vous contacterons bientôt.");
  };

  return (
    <section id="reservation" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-muted mb-2">Nous vous répondrons rapidement</p>
          <h2 className="display-4 fw-bold">Réserver une Table</h2>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="guests"
                        className="form-label fw-semibold"
                      >
                        Nombre de personnes
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choisir...</option>
                        <option value="1">1 personne</option>
                        <option value="2">2 personnes</option>
                        <option value="3">3 personnes</option>
                        <option value="4">4 personnes</option>
                        <option value="5">5 personnes</option>
                        <option value="6+">6+ personnes</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label fw-semibold">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="time" className="form-label fw-semibold">
                        Heure
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choisir l'heure...</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Message (optionnel)
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Demandes spéciales, allergies, etc."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-5 py-3"
                    >
                      Confirmer la réservation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="row mt-5">
          <div className="col-lg-4 text-center mb-4">
            <div className="contact-item">
              <Phone size={40} className="text-primary mb-3" />
              <h5 className="fw-bold">Téléphone</h5>
              <p className="text-muted">+225 07 01 97 53</p>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-4">
            <div className="contact-item">
              <MapPin size={40} className="text-primary mb-3" />
              <h5 className="fw-bold">Adresse</h5>
              <p className="text-muted">
                123 Restaurant Street
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-4">
            <div className="contact-item">
              <Clock size={40} className="text-primary mb-3" />
              <h5 className="fw-bold">Horaires</h5>
              <p className="text-muted">
                Lun-Dim: 12h-14h30
                <br />
                19h-22h30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
