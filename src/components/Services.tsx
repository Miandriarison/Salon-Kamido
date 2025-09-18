import React from 'react';
import { Scissors, Palette, Sparkles, Waves, Heart, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="text-amber-600" size={40} />,
      title: "Coupes sur mesure",
      description: "Coupes adaptées à votre morphologie et à la nature de vos cheveux. Dégradés, carré plongeant, coupes courtes ou longues.",
      price: "À partir de 45€"
    },
    {
      icon: <Palette className="text-amber-600" size={40} />,
      title: "Colorations expertes",
      description: "Couleurs naturelles ou fantaisie, balayages, mèches et ombré hair réalisés avec des produits haut de gamme.",
      price: "À partir de 60€"
    },
    {
      icon: <Sparkles className="text-amber-600" size={40} />,
      title: "Décolorations",
      description: "Techniques de décoloration respectueuses pour éclaircir vos cheveux en toute sécurité.",
      price: "À partir de 80€"
    },
    {
      icon: <Waves className="text-amber-600" size={40} />,
      title: "Lissages permanents",
      description: "Lissages japonais, brésilien ou coréen pour discipliner durablement vos cheveux bouclés.",
      price: "À partir de 120€"
    },
    {
      icon: <Heart className="text-amber-600" size={40} />,
      title: "Soins profonds",
      description: "Masques restructurants, soins à la kératine et traitements réparateurs pour nourrir vos cheveux en profondeur.",
      price: "À partir de 35€"
    },
    {
      icon: <Zap className="text-amber-600" size={40} />,
      title: "Coiffage & Styling",
      description: "Brushings, mises en plis, coiffures pour événements et conseils personnalisés pour l'entretien quotidien.",
      price: "À partir de 30€"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de prestations adaptées à tous les types de cheveux texturés, 
            avec un savoir-faire unique développé au fil de 18 années d'expérience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">{service.description}</p>
              <div className="text-center">
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Consultation personnalisée offerte</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Avant chaque prestation, nous prenons le temps d'analyser vos cheveux et 
            de comprendre vos attentes pour vous proposer le service le plus adapté.
          </p>
          <button 
            onClick={() => window.open('sms:+33678748951', '_blank')}
            className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Réserver votre consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;