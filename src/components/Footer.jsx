import React from 'react';
import './Footer.css'; // Import this CSS file

const Footer = () => (
  <footer className="footer">
    &copy; {new Date().getFullYear()} AI Defense Solutions. All rights reserved.
  </footer>
);

export default Footer;
