import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-800">ADJO CARE</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 font-semibold text-lg text-gray-700">
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">Home</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">About</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">Product</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Cross Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-lg text-gray-700">
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">Home</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">About</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">Product</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
