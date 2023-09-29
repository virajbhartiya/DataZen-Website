import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-icons'>
        <a href='#'>
          <FaInstagram size={24} />
        </a>
        <a href='#'>
          <FaTwitter size={24} />
        </a>
        <a href='#'>
          <FaFacebook size={24} />
        </a>
        <a href='#'>
          <FaYoutube size={24} />
        </a>
      </div>
      <div className='love-by-CodeCell'>Made with ❤️ by KJSCE CodeCell</div>
    </div>
  );
}

export default Footer;
