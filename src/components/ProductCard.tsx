import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="col-lg-6 col-xl-6 mb-4">
      <div className="card product-card h-100">
        <div className="card-img-wrapper">
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.name}
            loading="lazy"
          />
          <div className="card-img-overlay-hover">
            <div className="quick-view">
              <i className="fas fa-eye"></i>
            </div>
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text flex-grow-1">{product.description}</p>
          <div className="product-footer mt-auto">
            <div className="price mb-3">
              <span className="price-text">{product.price}</span>
            </div>
            <button className="btn btn-primary btn-purchase w-100">
              <i className="fas fa-shopping-cart me-2"></i>
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;