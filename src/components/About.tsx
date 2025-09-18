import React from 'react';
import { Heart, Clock, User, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Clock className="text-amber-600" size={32} />,
      title: "Prendre le temps",
      description: "Chaque client mérite une attention personnalisée et un service sans précipitation"
    },
    {
      icon: <User className="text-amber-600" size={32} />,
      title: "Écoute attentive",
      description: "Nous écoutons vos besoins pour créer la coiffure qui vous ressemble"
    },
    {
      icon: <Award className="text-amber-600" size={32} />,
      title: "Précision technique",
      description: "18 ans d'expérience pour maîtriser tous les types de cheveux texturés"
    },
    {
      icon: <Heart className="text-amber-600" size={32} />,
      title: "Atmosphère chaleureuse",
      description: "Un environnement calme et privé pour votre bien-être et votre détente"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">À propos de Kamido</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis 18 ans, le Salon Kamido cultive l'art de la coiffure multi-ethnique 
            dans le quartier authentique de Petit-Montrouge, à Paris.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Intérieur du salon Kamido" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Notre philosophie</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chez Kamido, nous croyons que chaque type de cheveux a sa beauté unique. 
              Notre expertise se concentre sur les cheveux afro, maghrébins, métissés et bouclés, 
              avec une approche respectueuse de leur structure naturelle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dans notre salon intimiste, nous privilégions la qualité à la quantité. 
              Chaque rendez-vous est un moment privilégié où technique, créativité et 
              bien-être se conjuguent pour révéler votre personnalité.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-600">
              <p className="text-gray-700 italic">
                "L'excellence ne se mesure pas à la vitesse, mais à la précision 
                et à l'attention portée à chaque détail."
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">{value.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;