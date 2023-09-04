import React from 'react';
import background from '../assets/background.jpg'

function Header() {
  return (
    <header className="relative bg-blue-700 py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Discover the Perfect Kids' Suits</h1>
        <p className="text-lg text-white mb-8">Explore our premium collection of seasonal suits for kids. Dress your little ones in style for any occasion.</p>
        <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-8 rounded-full inline-block transition duration-300 transform hover:scale-105 ease-in-out">Buy Now</a>
      </div>
    </header>
  );
}

export default Header;
