import React, { useState } from "react";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const menuItems = [
    {
      id: 1,
      name: "Risotto aux Truffes",
      description:
        "Riz crémeux cuit lentement avec du bouillon, agrémenté de truffes noires et de parmesan affiné.",
      price: "13 400 CFA",
      category: "LUNCH",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Saumon Grillé",
      description:
        "Filet de saumon grillé, accompagné de légumes de saison et sauce hollandaise.",
      price: "10 000 FCA",
      category: "DINNER",
      image:
        "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Pancakes aux Myrtilles",
      description:
        "Stack de pancakes moelleux aux myrtilles fraîches, sirop d'érable et beurre.",
      price: "16 000 CFA",
      category: "BREAKFAST",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Filet de Bœuf",
      description:
        "Tendre filet de bœuf grillé, purée de pommes de terre et légumes grillés.",
      price: "14 000 CFA",
      category: "DINNER",
      image:
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const categories = ["ALL", "BREAKFAST", "LUNCH", "DINNER"];

  const filteredItems =
    activeCategory === "ALL"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4">Notre Menu</h2>

          <ul className="nav nav-pills justify-content-center mb-5">
            {categories.map((category) => (
              <li key={category} className="nav-item">
                <button
                  className={`nav-link ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="row">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm menu-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div
                      className="menu-item-image"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "200px",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold">{item.name}</h5>
                        <span className="badge bg-primary fs-6">
                          {item.price}
                        </span>
                      </div>
                      <p className="card-text text-muted">{item.description}</p>
                      <button className="btn btn-outline-primary btn-sm">
                        Commander
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5">
            Voir le menu complet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
