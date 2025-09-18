import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleSMSClick = () => {
    window.open('sms:+33678748951', '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Salon <span className="text-amber-400">Kamido</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
          L'expertise multi-ethnique au cœur de Paris
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Spécialistes des cheveux afro, maghrébins, métissés et bouclés. 
          Une atmosphère calme et privée pour révéler votre beauté naturelle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleSMSClick}
            className="flex items-center space-x-3 bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <MessageCircle size={20} />
            <span>Prendre rendez-vous</span>
          </button>
          <button
            onClick={scrollToServices}
            className="flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            <span>Découvrir nos services</span>
            <ArrowDown size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">4.9★</div>
            <div className="text-sm opacity-80">164 avis Google</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">18 ans</div>
            <div className="text-sm opacity-80">d'expertise</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">Paris 14e</div>
            <div className="text-sm opacity-80">Petit-Montrouge</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white opacity-60" size={24} />
      </div>
    </section>
  );
};

export default Hero;