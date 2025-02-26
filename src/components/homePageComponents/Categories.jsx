import React, { useState, useEffect } from "react";
import categories from "../../images/categories.jpg"; // Imagen de tarjetas
import arrowLeft from "../../assets/arrow_left.png"; // Flecha izquierda
import arrowRight from "../../assets/arrow_right.png"; // Flecha derecha

const Categories = () => {
  const images = [
    { src: categories, name: "Categoría 1" },
    { src: categories, name: "Categoría 2" },
    { src: categories, name: "Categoría 3" },
    { src: categories, name: "Categoría 4" },
    { src: categories, name: "Categoría 5" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 4);
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
    <div className="w-full flex flex-col items-center relative bg-[#191924] pt-30 pb-20">
      <h2 className="text-white text-4xl font-bold mb-4">Descubre algunas de nuestras categorías</h2>

      {/* Contenedor con flechas afuera */}
      <div className="relative w-[90%] max-w-4xl flex items-center justify-center">
        
        {/* Flecha izquierda */}
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
                  className="relative rounded-lg shadow-lg p-4 group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Contenedor de la imagen con overlay */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={img.src}
                      alt={`destacado-${index}`}
                      className="w-full h-auto rounded-lg transition-all duration-300"
                    />
                    {/* Capa de color en hover */}
                    <div
                      className={`absolute inset-0 bg-[#63C3D1] rounded-lg transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-70" : "opacity-0"
                      }`}
                    ></div>
                    {/* Nombre de la categoría */}
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-xl">
                      {img.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
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

export default Categories;


