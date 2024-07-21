import React from 'react';
import IG from './components/instagram.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-0.5">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 KMBA. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@kmba.com" className="text-blue-400">info@kmba.com</a></p>
        <p>App Version:<span className="hover:underline hover:decoration-blue-500">Prototype v1.0</span></p>
      </div>
      <a href="https://www.instagram.com/kmb_presuniv/" target="_blank" rel="noopener noreferrer" className="flex justify-end px-3">
        <img src={IG} alt="Instagram" className="w-10 h-10" />
      </a>
    </footer>
  );
};

export default Footer;
