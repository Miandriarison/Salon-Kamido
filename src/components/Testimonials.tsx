import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amina K.",
      rating: 5,
      text: "Enfin un salon qui comprend vraiment les cheveux afro ! Le résultat est parfait et l'accueil chaleureux. Je recommande vivement !",
      service: "Coupe et coloration"
    },
    {
      name: "Fatou D.",
      rating: 5,
      text: "18 ans que je cherchais LE bon coiffeur... C'est fait ! Kamido prend vraiment le temps, c'est un vrai plus. Mes cheveux n'ont jamais été aussi beaux.",
      service: "Lissage permanent"
    },
    {
      name: "Léa M.",
      rating: 5,
      text: "Salon intimiste et très professionnel. Les conseils sont précieux et les produits utilisés sont de grande qualité. Une adresse à retenir !",
      service: "Soins et coupe"
    },
    {
      name: "Khadija B.",
      rating: 5,
      text: "Ambiance détendue, expertise remarquable. Mes cheveux bouclés sont sublimés à chaque visite. L'équipe est aux petits soins.",
      service: "Coiffage bouclés"
    },
    {
      name: "Sarah L.",
      rating: 5,
      text: "Un savoir-faire exceptionnel ! Le salon est cosy, on s'y sent bien. Les transformations sont toujours réussies. Merci pour votre talent !",
      service: "Transformation complète"
    },
    {
      name: "Nour E.",
      rating: 5,
      text: "Accueil personnalisé, conseils avisés et résultats au top ! C'est rare de trouver un salon aussi compétent pour nos types de cheveux.",
      service: "Couleur et soins"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-amber-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Avis Clients</h2>
          
          {/* Overall Rating */}
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-6xl font-bold text-amber-600">4.9</div>
              <div>
                <div className="flex space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600">Basé sur 164 avis Google</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté. 
            Découvrez leurs témoignages et leurs transformations réussies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute top-4 right-4 text-amber-200">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800 mb-1">{testimonial.name}</p>
                <p className="text-sm text-amber-600">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Plus d'avis sur Google</h3>
            <p className="text-gray-600 mb-6">
              Consultez l'ensemble de nos avis clients sur Google Business
            </p>
            <a 
              href="https://www.google.com/search?q=salon+kamido+paris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
            >
              <span>Voir tous les avis</span>
              <Star size={16} className="fill-current" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;