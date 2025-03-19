import React from 'react';

const Footer = () => (
  <footer className="p-3 bg-dark text-white text-center shadow-sm" role="contentinfo" aria-labelledby="footer-text">
    <p id="footer-text">© {new Date().getFullYear()} Zhiying Wu. All Rights Reserved.</p>
  </footer>
);

export default Footer;
