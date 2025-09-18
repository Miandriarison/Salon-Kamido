import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSMSClick = () => {
    window.open('sms:+33678748951', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-amber-400 mb-4">Salon Kamido</h3>
            <p className="text-lg text-amber-200 mb-4">
              L'expertise multi-ethnique au cœur de Paris
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Depuis 18 ans, nous cultivons l'art de la coiffure pour cheveux afro, 
              maghrébins, métissés et bouclés dans notre salon intimiste du 14e arrondissement.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-medium">41 Rue des Artistes</p>
                  <p className="text-gray-300">75014 Paris</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={18} />
                <button 
                  onClick={handleSMSClick}
                  className="font-medium hover:text-amber-400 transition-colors"
                >
                  +33 6 78 74 89 51
                </button>
              </div>
              
              <div className="bg-amber-900/30 p-4 rounded-lg border-l-3 border-amber-400">
                <p className="text-sm font-medium text-amber-200">
                  📱 Rendez-vous par SMS uniquement
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Navigation</h4>
            <div className="space-y-3">
              <a href="#accueil" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Accueil
              </a>
              <a href="#about" className="block text-gray-300 hover:text-amber-400 transition-colors">
                À propos
              </a>
              <a href="#services" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Services
              </a>
              <a href="#products" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Produits
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Galerie
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Services Summary */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h5 className="font-bold text-amber-400 mb-2">Spécialités</h5>
              <p className="text-sm text-gray-300">Cheveux afro, maghrébins, métissés & bouclés</p>
            </div>
            <div>
              <h5 className="font-bold text-amber-400 mb-2">Excellence</h5>
              <p className="text-sm text-gray-300">4.9★ sur 164 avis Google</p>
            </div>
            <div>
              <h5 className="font-bold text-amber-400 mb-2">Expérience</h5>
              <p className="text-sm text-gray-300">18 années de savoir-faire parisien</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Salon Kamido.</span>
              <span>Tous droits réservés.</span>
              <Heart className="text-red-400" size={16} />
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            Site créé avec ❤️ pour mettre en valeur l'expertise capillaire parisienne
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;