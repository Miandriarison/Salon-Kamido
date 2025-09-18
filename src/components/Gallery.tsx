import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coupe afro moderne",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Intérieur du salon",
      category: "Salon"
    },
    {
      url: "https://images.pexels.com/photos/3738328/pexels-photo-3738328.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cheveux bouclés naturels",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3618810/pexels-photo-3618810.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Station de coiffage",
      category: "Salon"
    },
    {
      url: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coloration experte",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3618814/pexels-photo-3618814.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Produits de qualité",
      category: "Produits"
    },
    {
      url: "https://images.pexels.com/photos/3771119/pexels-photo-3771119.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coiffure de mariage",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3771051/pexels-photo-3771051.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Espace détente",
      category: "Salon"
    },
    {
      url: "https://images.pexels.com/photos/3738327/pexels-photo-3738327.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lissage professionnel",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3771682/pexels-photo-3771682.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Soins capillaires",
      category: "Produits"
    },
    {
      url: "https://images.pexels.com/photos/3618820/pexels-photo-3618820.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coupe dégradée",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3771840/pexels-photo-3771840.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Outils professionnels",
      category: "Salon"
    },
    {
      url: "https://images.pexels.com/photos/3771050/pexels-photo-3771050.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Brushing parfait",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3738330/pexels-photo-3738330.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cheveux métissés",
      category: "Coiffures"
    },
    {
      url: "https://images.pexels.com/photos/3618813/pexels-photo-3618813.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Huiles naturelles",
      category: "Produits"
    },
    {
      url: "https://images.pexels.com/photos/3771838/pexels-photo-3771838.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Ambiance cosy",
      category: "Salon"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Galerie</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre univers à travers nos réalisations, notre salon et nos produits de qualité.
            Chaque image raconte l'histoire de notre passion pour les cheveux texturés.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-amber-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <img 
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="font-semibold text-lg">{images[selectedImage].title}</h3>
                <p className="text-amber-300">{images[selectedImage].category}</p>
                <p className="text-sm opacity-75 mt-2">
                  {selectedImage + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;