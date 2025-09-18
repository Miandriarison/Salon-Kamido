import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "images/1.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/2.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/3.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/4.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/5.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/6.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/7.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/8.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/9.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/10.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/11.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
    {
      url: "images/12.webp",
      title: "Salon professionnel",
      category: "Salon"
    },
 
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