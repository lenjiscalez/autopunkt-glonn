import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        {/* Top section with CTA */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für Ihren nächsten Schritt?</h2>
            <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch über Ihre Fahrzeugwünsche oder Verkaufsabsichten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fahrzeuge" className="btn btn-primary px-8 py-3 text-sm uppercase tracking-wider">
                Fahrzeuge entdecken
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/ankauf" className="btn btn-outline px-8 py-3 text-sm uppercase tracking-wider">
                Fahrzeug verkaufen
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Car size={32} className="text-primary mr-3" />
              <div>
                <h3 className="text-xl font-bold">AUTOPUNKT</h3>
                <p className="text-xs tracking-widest text-accent uppercase">GLONN</p>
              </div>
            </div>
            <p className="mb-6 text-accent-light leading-relaxed">
              Ihr zuverlässiger Partner für den Ankauf und Verkauf von Fahrzeugen in Glonn und Umgebung. 
              Wir bieten Ihnen erstklassigen Service und faire Konditionen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-accent-light hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Startseite</span>
                </Link>
              </li>
              <li>
                <Link to="/fahrzeuge" className="text-accent-light hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Fahrzeuge</span>
                </Link>
              </li>
              <li>
                <Link to="/ankauf" className="text-accent-light hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Ankauf</span>
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-accent-light hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Kastenseestraße 6, 85625 Glonn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent-light hover:text-primary transition-colors"
                >
                  Kastenseestraße 6, 85625 Glonn
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <a href="tel:+491736851896" className="text-accent-light hover:text-primary transition-colors">
                  +49 173 6851896
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:autopunkt-glonn@gmx.de" className="text-accent-light hover:text-primary transition-colors">
                  autopunkt-glonn@gmx.de
                </a>
              </li>
              <li className="flex items-start">
                <Instagram size={18} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/autopunkt.glonn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent-light hover:text-primary transition-colors"
                >
                  @autopunkt.glonn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">Rechtliches</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/impressum" className="text-accent-light hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Impressum</span>
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-accent-light hover:text-primary transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  <span>Datenschutz</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Autopunkt Glonn. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;