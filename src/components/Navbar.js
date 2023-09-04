import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="bg-orange-400">
      <nav className="container mx-auto bg-orange-400 md:flex justify-between items-center p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold">KharedoSuits</div>

          {/* Toggle Button (for mobile) */}
          <button
            onClick={toggleNavbar}
            className="md:hidden text-white hover:text-gray-100"
          >
            {navbarOpen ? <FaTimes /> : <FaBars />} {/* Use react-icons */}
          </button>
        </div>

        {/* Navigation (for larger screens) */}
        <ul
          className={`md:flex md:flex-row md:space-x-4 ${
            navbarOpen ? "block" : "hidden"
          } flex flex-col items-center justify-center`}
        >
          <li>
            <a href="/home" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/blogs" className="text-white hover:underline">
              Blogs
            </a>
          </li>
        </ul>

        {/* Get Latest News Button (for larger screens) */}
        <button className="hidden md:block bg-white text-gray-800 hover:bg-gray-900 text-sm font-semibold py-2 px-4 rounded-full">
          Get Latest News
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
