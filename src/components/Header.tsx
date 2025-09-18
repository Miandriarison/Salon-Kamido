import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.open('sms:+33678748951', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-amber-700">Salon Kamido</h1>
            <div className="hidden md:block text-sm text-gray-600">
              L'expertise multi-ethnique au cœur de Paris
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-amber-700 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-700 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-700 transition-colors">
              Produits
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-700 transition-colors">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-700 transition-colors">
              Contact
            </button>
          </nav>

          {/* Phone Button */}
          <button
            onClick={handlePhoneClick}
            className="hidden md:flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
          >
            <Phone size={16} />
            <span>SMS Rendez-vous</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            <button onClick={() => scrollToSection('accueil')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700">
              À propos
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700">
              Produits
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700">
              Contact
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors w-full justify-center mt-4"
            >
              <Phone size={16} />
              <span>SMS Rendez-vous</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;