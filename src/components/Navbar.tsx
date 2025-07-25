import React, { useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
//import { FaUtensils } from "react-icons/fa";
import { GoHome } from "react-icons/go";
//import { ChefHat } from "lucide-react";
import { IoCallOutline, IoMenuSharp } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import { MdEvent } from "react-icons/md";
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Navigation 
      <nav className="navbar navbar-expand-lg bg-light py-2 border-bottom">
        <div className="container">
          <div className="dropdown">
            <button className="btn btn-link dropdown-toggle text-dark" type="button" data-bs-toggle="dropdown">
              LANDINGS
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Restaurant</a></li>
              <li><a className="dropdown-item" href="#">Café</a></li>
              <li><a className="dropdown-item" href="#">Bar</a></li>
            </ul>
          </div>
          <div className="dropdown ms-3">
            <button className="btn btn-link dropdown-toggle text-dark" type="button" data-bs-toggle="dropdown">
              DOCUMENTATION
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Guide</a></li>
              <li><a className="dropdown-item" href="#">API</a></li>
              <li><a className="dropdown-item" href="#">Support</a></li>
            </ul>
          </div>
          <button className="btn btn-link text-dark ms-3">
            BOOKING FORM
          </button>
          <div className="ms-auto">
            <span className="text-muted">Réservations: +33 1 23 45 67 89</span>
          </div>
        </div>
      </nav>
*/}
      {/* Main Navigation */}
      <nav
        className={`navbar navbar-expand-lg sticky-top ${
          isScrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            {/**<ChefHat size={32} className="me-2 text-primary" /> */}
            <h2 className="mb-0 fw-bold"> Restaurant</h2>
          </a>

          {/**
          *  <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          */}

          {/**menu sur dekstop */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item align-items-center fs-5">
                <button
                  className="nav-link btn btn-link "
                  onClick={() => scrollToSection("hero")}
                >
                  <span> Accueil</span>
                </button>
              </li>
              <li className="nav-item fs-5">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("about")}
                >
                  À propos
                </button>
              </li>
              <li className="nav-item fs-5">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("menu")}
                >
                  Menu
                </button>
              </li>
              <li className="nav-item fs-5">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("events")}
                >
                  Événements
                </button>
              </li>
              <li className="nav-item fs-5">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("reservation")}
                >
                  Contact
                </button>
              </li>
            </ul>
            {/**
           *   <button
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection("reservation")}
            >
              Réserver
            </button>
           */}
          </div>
          {/**Boutton navbar petit ecran */}
          <button
            className="btn d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <IoMenuSharp size={30} />
          </button>
          {/** Fin Boutton navbar petit ecran */}
        </div>
      </nav>
      {/**
       * navbar de petit ecran
       */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ maxWidth: "250px" }}
      >
        <div className="offcanvas-header m-0">
          <h5 className="offcanvas-title fw-bold" id="offcanvasScrollingLabel">
            Menu
          </h5>

          <button
            type="button"
            className="btn-close m-0 fw-bold"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr className=" m-0" style={{ color: "black", width: "100%" }} />
        <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item m-3 align-items-center">
              <button
                className="nav-link btn btn-link fs-5 d-flex align-items-center gap-2"
                onClick={() => scrollToSection("hero")}
              >
                <GoHome size={23} />
                <span> Accueil</span>
              </button>
            </li>
            <li className="nav-item m-3">
              <button
                className="nav-link btn btn-link fs-5 d-flex align-items-center gap-2"
                onClick={() => scrollToSection("about")}
              >
                <AiOutlineInfoCircle size={23} /> À propos
              </button>
            </li>
            <li className="nav-item m-3">
              <button
                className="nav-link btn btn-link fs-5 d-flex align-items-center gap-2"
                onClick={() => scrollToSection("menu")}
              >
                <LuUtensils size={23} /> Menu
              </button>
            </li>
            <li className="nav-item m-3">
              <button
                className="nav-link btn btn-link fs-5 d-flex align-items-center gap-2"
                onClick={() => scrollToSection("events")}
              >
                <MdEvent size={23} /> Événements
              </button>
            </li>
            <li className="nav-item m-3">
              <button
                className="nav-link btn btn-link fs-4 align-items-center"
                onClick={() => scrollToSection("reservation")}
              >
                <IoCallOutline size={23} /> <span>Contact</span>
              </button>
            </li>
          </ul>
          {/**
        *    <button
            className="btn btn-primary btn-lg"
            onClick={() => scrollToSection("reservation")}
          >
            Réserver
          </button>
        */}
        </div>
      </div>
      {/**
       * fin navbar de petit ecran
       */}
    </>
  );
};

export default Navbar;
