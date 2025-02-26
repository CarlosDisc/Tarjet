import React, { useState, useEffect } from "react";
import tarjet from "../../images/Tarjet.png"; // Imagen de tarjetas
import arrowLeft from "../../assets/arrow_left.png"; // Flecha izquierda
import arrowRight from "../../assets/arrow_right.png"; // Flecha derecha
import favoriteIcon from "../../assets/favorite_icon.png"; // Icono de favorito
import shareIcon from "../../assets/share_icon.png"; // Icono de compartir
import newFolderIcon from "../../assets/new_folder_icon.png"; // Icono de nueva carpeta

const Destacados = () => {
  const images = [tarjet, tarjet, tarjet, tarjet, tarjet]; // Simulación de elementos
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - slidesToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= images.length - slidesToShow ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center my-8 relative pt-20 pb-20">
      <h2 className="text-[#63C3D1] text-4xl font-bold mb-4">Nuestros Destacados</h2>

      {/* Contenedor con flechas afuera */}
      <div className="relative w-[90%] max-w-4xl flex items-center justify-center">
        
        {/* Flecha izquierda - Fuera del carrusel */}
        <button
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:opacity-100 transition z-10"
          onClick={prevSlide}
        >
          <img src={arrowLeft} alt="Flecha izquierda" className="w-12 h-12 opacity-70 hover:opacity-100 transition" />
        </button>

        {/* Carrusel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / slidesToShow}%` }}>
                <div 
                  className="relative bg-white rounded-lg shadow-lg p-4 group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Contenedor de la imagen con blur en hover */}
                  <div className="relative">
                    <img
                      src={img}
                      alt={`destacado-${index}`}
                      className={`w-full h-auto rounded-lg transition-all duration-300 ${
                        hoveredIndex === index ? "blur-md" : "blur-0"
                      }`}
                    />

                    {/* Íconos flotantes (aparecen solo en hover) */}
                    <div
                      className={`absolute top-2 right-2 flex flex-col space-y-2 transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <button className="w-6 h-6 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition">
                        <img src={newFolderIcon} alt="Guardar en carpeta" className="w-full h-full" />
                      </button>
                      <button className="w-6 h-6 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition">
                        <img src={favoriteIcon} alt="Favorito" className="w-full h-full" />
                      </button>
                      <button className="w-6 h-6 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition">
                        <img src={shareIcon} alt="Compartir" className="w-full h-full" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha - Fuera del carrusel */}
        <button
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:opacity-100 transition z-10"
          onClick={nextSlide}
        >
          <img src={arrowRight} alt="Flecha derecha" className="w-12 h-12 opacity-70 hover:opacity-100 transition" />
        </button>

      </div>
    </div>
  );
};

export default Destacados;
