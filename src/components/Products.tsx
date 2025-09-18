import React from 'react';
import { Star, Leaf, Globe, Award } from 'lucide-react';

const Products = () => {
  const brands = [
    {
      name: "Redken",
      origin: "USA",
      icon: <Globe className="text-red-600" size={24} />,
      description: "Gamme professionnelle reconnue mondialement pour ses innovations en matière de soins capillaires.",
      speciality: "Protéines et céramides"
    },
    {
      name: "SJR Sandrine Jeanne Rose",
      origin: "France",
      icon: <Star className="text-pink-600" size={24} />,
      description: "Marque française premium spécialisée dans les soins pour cheveux afro et métissés.",
      speciality: "Beurre de karité et huiles précieuses"
    },
    {
      name: "Liss Factor",
      origin: "Corée",
      icon: <Award className="text-purple-600" size={24} />,
      description: "Innovation coréenne pour des lissages durables et respectueux de la fibre capillaire.",
      speciality: "Technologie kératine avancée"
    },
    {
      name: "Savonnerie Bethanie",
      origin: "France",
      icon: <Leaf className="text-green-600" size={24} />,
      description: "Shampoings naturels artisanaux aux ingrédients biologiques pour un lavage doux.",
      speciality: "Formules sans sulfates"
    },
    {
      name: "Yari",
      origin: "Pays-Bas",
      icon: <Leaf className="text-amber-600" size={24} />,
      description: "Huiles végétales pures et naturelles pour nourrir et protéger les cheveux texturés.",
      speciality: "Huiles vierges pressées à froid"
    },
    {
      name: "GHD",
      origin: "UK",
      icon: <Award className="text-gray-700" size={24} />,
      description: "Outils de coiffage professionnels haut de gamme, référence des coiffeurs du monde entier.",
      speciality: "Technologie céramique avancée"
    },
    {
      name: "Mizani",
      origin: "USA",
      icon: <Star className="text-blue-600" size={24} />,
      description: "Expertise scientifique dédiée aux cheveux afro-américains et texturés.",
      speciality: "Système de relaxation et hydratation"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nos Produits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une sélection rigoureuse des meilleures marques internationales, 
            choisies pour leur qualité exceptionnelle et leur respect des cheveux texturés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">{brand.name}</h3>
                <div className="flex items-center space-x-2">
                  {brand.icon}
                  <span className="text-sm text-gray-500 font-medium">{brand.origin}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{brand.description}</p>
              
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-amber-800 mb-1">Spécialité :</p>
                <p className="text-sm text-amber-700">{brand.speciality}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Soins Naturels</h3>
            <p className="text-gray-600">
              Masques, huiles et shampoings aux ingrédients naturels pour respecter 
              la structure unique de vos cheveux.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Gamme Premium</h3>
            <p className="text-gray-600">
              Produits professionnels haut de gamme pour des résultats durables 
              et une protection optimale.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sélection Mondiale</h3>
            <p className="text-gray-600">
              Les meilleures innovations des États-Unis, de France, de Corée 
              et d'ailleurs pour votre beauté.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Conseil personnalisé</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos experts vous conseillent les produits les plus adaptés à votre type de cheveux 
            et vous accompagnent dans votre routine capillaire à domicile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;