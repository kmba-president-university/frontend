import React from 'react';
import { Link } from 'react-router-dom';
import logopu from './components/logopu.png';
import logokmb from './components/LogoKMBA.jpg';

const Navbar = () => {
  return (
    <nav className="flex items-center bg-white">
      <a href="https://president.ac.id/">
        <img src={logopu} className="w-20 h-auto ml-40 mt-4" alt="President University Logo" />
      </a>
      <img src={logokmb} className="w-20 h-auto ml-10 mt-4" alt="KMBA Logo" />
      <div className="ml-6">
        <span className="text-xl font-bold text-black">Keluarga Mahasiswa</span>
        <br />
        <span className="text-lg font-bold text-black">Buddhist Asokavardhana</span>
        <br />
        <span className="text-lg font-bold text-black">President University</span>
      </div>
      <ul className="flex-1 text-center">
        <li className="list-none inline-block px-5"><Link to="/" className="no-underline text-black px-2">Home</Link></li>
        <li className="list-none inline-block px-5"><Link to="/events" className="no-underline text-black px-2">Events</Link></li>
        <li className="list-none inline-block px-5"><Link to="/IYA" className="no-underline text-black px-2">IYA</Link></li>
        <li className="list-none inline-block px-5"><Link to="/Wild" className="no-underline text-black px-2">Now Cabinet</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
