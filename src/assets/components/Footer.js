import React from "react";
import './Footer.css';
import Links from './Links';

const Footer = () => {
  return (
    
    <footer className="footer">
        <Links />
      <div className="footer-container">
        
        <div className="footer-column">
          <h3 className="font-bold">Integrations</h3>
          <ul>
            <li><a href="/about">Shopify</a></li>
            <li><a href="/careers">Etsy</a></li>
            <li><a href="/blog">eBay</a></li>
            <li><a href="/about">Amazon</a></li>
            <li><a href="/careers">TikTok Shop</a></li>
            <li><a href="/blog">PrestaShop</a></li>
            <li><a href="/about">BigCommerce</a></li>
            <li><a href="/careers">Wix</a></li>
            <li><a href="/blog">WooCommerce</a></li>
            <li><a href="/about">Squarespace</a></li>
            <li><a href="/careers">Printify API</a></li>
            <li><a href="/blog">Printify Pop Up Store</a></li>
            <li><a href="/about">Shutterstock</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="font-bold">Discover</h3>
          <ul>
            <li><a href="/help-center">Blog</a></li>
            <li><a href="/contact">Guides</a></li>
            <li><a href="/faq">Products</a></li>
            <li><a href="/help-center">Etsy Print On Demand</a></li>
            <li><a href="/contact">Shopify print on demand</a></li>
            <li><a href="/faq">Woocommerce print on demand</a></li>
            <li><a href="/help-center">Wix print on demand</a></li>
            <li><a href="/contact">Squarespace print on demand</a></li>
            <li><a href="/faq">Make your own Shirt</a></li>
            <li><a href="/help-center">Brands</a></li>
            <li><a href="/contact">Pricing</a></li>
            <li><a href="/faq">Shipping Rates</a></li>
            <li><a href="/faq">Mockup Generator</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="font-bold">Start Selling</h3>
          <ul>
            <li><a href="/help-center">Custom T-shirts</a></li>
            <li><a href="/contact">Custom Hoodies</a></li>
            <li><a href="/faq">Custom Mugs</a></li>
            <li><a href="/help-center">Custom Socks </a></li>
            <li><a href="/contact">Custom Backpacks</a></li>
            <li><a href="/faq">Custom Branding</a></li>
            <li><a href="/help-center">Sell on etsy</a></li>
            <li><a href="/contact">Sell on Social Media</a></li>
            <li><a href="/faq">Free T-shirt Designs</a></li>
            <li><a href="/help-center">Custom Products</a></li>
            <li><a href="/contact">Start a Clothing Line</a></li>
            <li><a href="/faq">Start a POD Business</a></li>
            <li><a href="/faq">Bulk Orders</a></li>
            <li><a href="/faq">Transfering to Printify</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="font-bold">Printify</h3>
          <ul>
            <li><a href="/help-center">Print on Demand</a></li>
            <li><a href="/contact">Print Providers</a></li>
            <li><a href="/faq">Expert Program</a></li>
            <li><a href="/help-center">Printify Express Delivery </a></li>
            <li><a href="/contact">Become a Partner</a></li>
            <li><a href="/faq">About</a></li>
            <li><a href="/help-center">Printify Quality Promise</a></li>
            <li><a href="/contact">Jobs</a></li>
            <li><a href="/faq">Webinars</a></li>
            <li><a href="/help-center">Printing Profits Podcast</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">Affiliate</a></li>
            <li><a href="/faq">Contact Sales</a></li>
            <li><a href="/contact">POD Glossary</a></li>
            <li><a href="/faq">Network Fulfilment Status</a></li>
            <li><a href="/faq">Merchant Protection</a></li>
            <li><a href="/faq">Security</a></li>
            <li><a href="/faq">Sitemap</a></li>
          </ul>
        </div>

       
      </div>

     

      <div className="footer-bottom">
      <ul>
            <li ><a href="#">Intellectual Property Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        <p>&copy; 2024 Printify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
