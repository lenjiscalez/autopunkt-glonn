import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Fahrzeuge', path: '/fahrzeuge' },
    { name: 'Ankauf', path: '/ankauf' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Main navigation */}
      <div className={`${isScrolled ? 'header-solid' : 'header-transparent'} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 bg-white bg-opacity-95 backdrop-blur-md shadow-sm">
          <div className="flex justify-between items-center">
            {/* Logo - Multiple fallback paths for maximum compatibility */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center">
                <img 
                  src="/assets/Autopunkt Logo Final.png" 
                  alt="Autopunkt Glonn Logo" 
                  className="h-10 transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // First fallback
                    const target = e.target as HTMLImageElement;
                    target.onerror = (e2) => {
                      // Second fallback
                      const target2 = e2.target as HTMLImageElement;
                      target2.onerror = (e3) => {
                        // Third fallback - relative path
                        const target3 = e3.target as HTMLImageElement;
                        target3.onerror = null; // Prevent infinite loop
                        target3.src = "./assets/Autopunkt Logo Final.png";
                      };
                      target2.src = "../assets/Autopunkt Logo Final.png";
                    };
                    target.src = "assets/Autopunkt Logo Final.png";
                  }}
                />
              </div>
            </Link>

            {/* Contact info in white navigation bar - Optimized spacing and alignment */}
            <div className="hidden lg:flex items-center justify-center space-x-8 mx-4">
              <a 
                href="https://maps.google.com/?q=Kastenseestraße 6, 85625 Glonn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Adresse: Kastenseestraße 6, 85625 Glonn"
              >
                <MapPin size={18} className="text-primary group-hover:text-primary-dark transition-colors duration-300" strokeWidth={2} />
              </a>
              
              <a 
                href="mailto:autopunkt-glonn@gmx.de" 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="E-Mail: autopunkt-glonn@gmx.de"
              >
                <Mail size={18} className="text-primary group-hover:text-primary-dark transition-colors duration-300" strokeWidth={2} />
              </a>
              
              <a 
                href="tel:+491736851896" 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Telefon: +49 173 6851896"
              >
                <Phone size={18} className="text-primary group-hover:text-primary-dark transition-colors duration-300" strokeWidth={2} />
              </a>
              
              <a 
                href="https://www.instagram.com/autopunkt.glonn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Instagram: @autopunkt.glonn"
              >
                <Instagram size={18} className="text-primary group-hover:text-primary-dark transition-colors duration-300" strokeWidth={2} />
              </a>
            </div>

            {/* Desktop Navigation - Optimized spacing and alignment */}
            <nav className="hidden md:flex items-center">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 ${
                      location.pathname === link.path ? 'text-primary after:w-full' : 'text-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile menu button - Improved for better rendering */}
            <button
              className="md:hidden text-secondary hover:text-primary transition-colors p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={28} strokeWidth={2} className="transform-gpu" />
              ) : (
                <Menu size={28} strokeWidth={2} className="transform-gpu" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Improved for better rendering */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-6 px-4 shadow-elegant backdrop-blur-sm">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-lg transition-colors hover:text-primary antialiased ${
                    location.pathname === link.path ? 'text-primary' : 'text-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Contact links in mobile menu - Improved spacing and alignment */}
              <div className="flex justify-around pt-4 border-t border-gray-100">
                <a 
                  href="https://maps.google.com/?q=Kastenseestraße 6, 85625 Glonn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Adresse: Kastenseestraße 6, 85625 Glonn"
                >
                  <MapPin size={20} strokeWidth={2} className="transform-gpu" />
                </a>
                
                <a 
                  href="mailto:autopunkt-glonn@gmx.de" 
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="E-Mail: autopunkt-glonn@gmx.de"
                >
                  <Mail size={20} strokeWidth={2} className="transform-gpu" />
                </a>
                
                <a 
                  href="tel:+491736851896" 
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Telefon: +49 173 6851896"
                >
                  <Phone size={20} strokeWidth={2} className="transform-gpu" />
                </a>
                
                <a 
                  href="https://www.instagram.com/autopunkt.glonn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Instagram: @autopunkt.glonn"
                >
                  <Instagram size={20} strokeWidth={2} className="transform-gpu" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;