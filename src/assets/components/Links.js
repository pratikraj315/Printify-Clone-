import React from 'react';
import './Links.css'; // Assuming you'll create this CSS file for styling

const Links = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Logo on the left */}
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Printify Logo" className="printify-logo" />
        </div>
        
        {/* Social Media Icons on the right */}
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-facebook-icon.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-instagram-icon.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-linkedin-icon.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-twitter-icon.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-youtube-icon.png" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-tiktok-icon.png" alt="TikTok" className="social-icon" />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-reddit-icon.png" alt="Reddit" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
