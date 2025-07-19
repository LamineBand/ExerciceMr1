import React from 'react';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Converse Chuck Taylor All Star",
      description: "Les Converse Chuck Taylor All Star sont des baskets iconiques au design intemporel. Avec leur tige en toile légère, leur semelle en caoutchouc vulcanisé et leur style polyvalent, elles s'adaptent à tous les looks, du casual au streetwear.",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "69,99 €"
    },
    {
      id: 2,
      name: "Nike Air Zoom Pegasus",
      description: "Les Nike Air Zoom Pegasus sont des chaussures de sport polyvalentes, idéales pour la course et l'entraînement. Dotées d'un amorti Nike React et d'une unité Zoom Air à l'avant-pied, elles offrent un excellent retour d'énergie.",
      image: "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "129,99 €"
    },
    {
      id: 3,
      name: "Nike Air Force 1",
      description: "Les Nike Air Force 1 sont des sneakers légendaires, nées en 1982 et devenues une référence dans le monde du streetwear. Conçues à l'origine pour le basketball, elles offrent un amorti Nike Air pour un confort optimal.",
      image: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "109,99 €"
    },
    {
      id: 4,
      name: "Nike Air Max",
      description: "Les Nike Air Max sont des baskets emblématiques reconnues pour leur amorti révolutionnaire Air visible dans la semelle. Conçues pour allier performance et design audacieux, elles offrent un confort exceptionnel.",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "149,99 €"
    }
  ];

  return (
    <section id="products" className="products-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Nos Produits</h2>
            <p className="section-subtitle">Découvrez notre sélection de chaussures tendance</p>
            <div className="title-divider mx-auto"></div>
          </div>
        </div>
        <div className="row">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;