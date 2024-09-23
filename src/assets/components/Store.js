import React from 'react';
import './Store.css'; // Assuming you'll create this CSS file for styling

const Store = () => {
  return (
    <div className="store-section">
      <h2 className="store-title">Connect your store</h2>
      <p className="store-subtitle">
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>

      <div className="store-grid">
        <div className="store-item">
          <img src="path-to-Bigcommerce-logo.png" alt="Bigcommerce" />
        </div>
        <div className="store-item">
          <img src="path-to-Squarespace-logo.png" alt="Squarespace" />
        </div>
        <div className="store-item">
          <img src="path-to-Wix-logo.png" alt="Wix" />
        </div>
        <div className="store-item">
          <img src="path-to-WooCommerce-logo.png" alt="WooCommerce" />
        </div>
        <div className="store-item center-logo">
          <img src="path-to-Printify-logo.png" alt="Printify" />
        </div>
        <div className="store-item">
          <img src="path-to-API-logo.png" alt="API" />
        </div>
        <div className="store-item">
          <img src="path-to-Shopify-logo.png" alt="Shopify" />
        </div>
        <div className="store-item">
          <img src="path-to-Etsy-logo.png" alt="Etsy" />
        </div>
        <div className="store-item">
          <p>And more</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
