import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
{
  /**ChefHat */
}
const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              {/** <ChefHat size={32} className="me-2 text-primary" /> */}
              <h4 className="mb-0 fw-bold">Restaurant</h4>
            </div>
            <p className=" text-white mb-4">
              Une expérience culinaire exceptionnelle au cœur de New York City.
              Découvrez nos spécialités méditerranéennes dans un cadre élégant
              et raffiné.
            </p>
            <div className="social-links">
              <a href="#" className="text-light me-3" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-light me-3" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-light" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#hero" className=" text-white text-decoration-none">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className=" text-white text-decoration-none">
                  À propos
                </a>
              </li>
              <li>
                <a href="#menu" className=" text-white text-decoration-none">
                  Menu
                </a>
              </li>
              <li>
                <a href="#events" className=" text-white text-decoration-none">
                  Événements
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">123 Restaurant Street</li>
              <li className="mb-2">New York, NY 10001</li>
              <li className="mb-2">+225 07 01 97 53 50</li>
              <li>lamine.bandaogo22@gmail.com</li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold mb-3">Horaires</h5>
            <ul className="list-unstyled text-white">
              <li className="mb-2">Lundi - Dimanche</li>
              <li className="mb-2">Déjeuner: 12h00 - 14h30</li>
              <li className="mb-2">Dîner: 19h00 - 22h30</li>
              <li>Fermé le mardi</li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-white">
              &copy; 2025 Restaurant. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-md-end">Conçu par Bandaogo Lamine</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
