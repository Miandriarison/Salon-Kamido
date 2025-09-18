import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Star, Navigation } from 'lucide-react';

const Contact = () => {
  const handleSMSClick = () => {
    window.open('sms:+33678748951', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+33678748951', '_blank');
  };

  const handleDirectionsClick = () => {
    window.open('https://www.google.com/maps/dir//41+Rue+des+Artistes,+75014+Paris', '_blank');
  };

  const hours = [
    { day: "Lundi", time: "Fermé", closed: true },
    { day: "Mardi", time: "10h00 - 19h00", closed: false },
    { day: "Mercredi", time: "10h00 - 19h00", closed: false },
    { day: "Jeudi", time: "10h00 - 19h00", closed: false },
    { day: "Vendredi", time: "10h00 - 19h00", closed: false },
    { day: "Samedi", time: "10h00 - 18h00", closed: false },
    { day: "Dimanche", time: "Sur rendez-vous", closed: false }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact & Localisation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Situé au cœur du charmant quartier de Petit-Montrouge, notre salon vous accueille 
            dans un cadre intimiste et chaleureux, facilement accessible en transports en commun.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="text-amber-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Notre adresse</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-700 font-medium">41 Rue des Artistes</p>
                <p className="text-lg text-gray-700">75014 Paris</p>
                <p className="text-gray-600">Quartier Petit-Montrouge</p>
                <button 
                  onClick={handleDirectionsClick}
                  className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium mt-4"
                >
                  <Navigation size={16} />
                  <span>Obtenir l'itinéraire</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Téléphone</h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-medium">+33 6 78 74 89 51</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleSMSClick}
                    className="flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>SMS (Recommandé)</span>
                  </button>
                  <button 
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-amber-600 hover:text-amber-600 transition-colors"
                  >
                    <Phone size={16} />
                    <span>Appeler</span>
                  </button>
                </div>
                <p className="text-sm text-gray-600 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <strong>Important :</strong> Rendez-vous uniquement par SMS pour un service personnalisé et des créneaux optimisés.
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Star className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Notre réputation</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">4.9★</div>
                <p className="text-gray-600 mb-4">Basé sur 164 avis Google</p>
                <p className="text-sm text-gray-500">Une excellence reconnue par nos clients parisiens</p>
              </div>
            </div>
          </div>

          {/* Hours + Map */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{hour.day}</span>
                    <span className={`font-medium ${hour.closed ? 'text-red-500' : 'text-green-600'}`}>
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-600">
                <p className="text-sm text-amber-800">
                  <strong>Ouverture à 10h00</strong> pour vous accueillir dans les meilleures conditions
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Localisation</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2647982827!2d2.320853!3d48.833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671c4e5d1b7b7%3A0x1234567890abcdef!2s41%20Rue%20des%20Artistes%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Salon Kamido"
                />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Transports :</strong> Métro ligne 13 - Pernety (5 min à pied)</p>
                <p><strong>Bus :</strong> Lignes 62, 88 - Arrêt Plaisance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Prêt(e) à transformer vos cheveux ?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et découvrez l'expertise Kamido pour sublimer 
            vos cheveux texturés dans notre écrin parisien.
          </p>
          <button 
            onClick={handleSMSClick}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Réserver maintenant par SMS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;