import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About BOOKSoLD</h5>
            <p>
              BOOKSoLD is your one-stop shop for a vast collection of books from various genres. Whether you're looking for the latest bestsellers, classic literature, or rare finds, we've got you covered. Enjoy a seamless shopping experience with our user-friendly website and fast delivery service.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/" className="text-light">Contact Us</a></li>
              <li><a href="/" className="text-light">FAQ</a></li>
              <li><a href="/" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.reddit.com/shroudloaded" className="text-light"><i className="fab fa-reddit"></i> Reddit</a></li>
              <li><a href="https://www.twitter.com/booksold" className="text-light"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.instagram.com/advaithsshetty" className="text-light"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://www.linkedin.com/advaithsshetty" className="text-light"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 BOOKSoLD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
