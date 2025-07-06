// src/components/header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-blue-900 py-6 px-6 shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Nextgen CodeX</h1>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-semibold hover:text-blue-700 transition-colors duration-300">Home</Link>
          <Link to="/about" className="font-semibold hover:text-blue-700 transition-colors duration-300">About</Link>
          <Link to="/contact" className="font-semibold hover:text-blue-700 transition-colors duration-300">Contact</Link>
          <Link to="/counter" className="font-semibold hover:text-blue-700 transition-colors duration-300">Counter</Link>
          <Link to="/payment" className="font-semibold hover:text-blue-700 transition-colors duration-300">Payment</Link>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;