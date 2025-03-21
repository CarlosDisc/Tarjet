import React, { useState, useEffect } from "react";
import Tarjet from "../Tarjet";
import tarjet from "../../images/Tarjet.png"; // Imagen de tarjetas
import arrowLeft from "../../assets/arrows/arrow_left.png"; // Flecha izquierda
import arrowRight from "../../assets/arrows/arrow_right.png"; // Flecha derecha

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
    <div className="w-full flex flex-col items-center my-8 relative">
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
            className="flex transition-transform duration-500 ease-in-out border-"
            style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="flex-shrink-0 px-2 " style={{ width: `${100 / slidesToShow}%` }}>
              <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-4 group">
                <Tarjet 
                  img={img}
                  isHovered={hoveredIndex === index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)} 
                />
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