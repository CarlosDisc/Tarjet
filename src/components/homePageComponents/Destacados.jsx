import React, { useState, useEffect } from "react";
import Tarjet from "../Tarjet";
import arrowLeft from "../../assets/arrows/arrow_left.png"; // Flecha izquierda
import arrowRight from "../../assets/arrows/arrow_right.png"; // Flecha derecha
import newFolderIcon from "../../assets/MiniIcons_tarjet/new_folder_icon.png"; // Ícono de carpeta
import favoriteIcon from "../../assets/MiniIcons_tarjet/favorite_icon.png"; // Ícono de favorito
import shareIcon from "../../assets/MiniIcons_tarjet/share_icon.png";
import icon from "../../images/icon.png";

const Destacados = () => {
  const bgs = ["#19d125", "#FF5733", "#4A90E2", "#9B59B6", "#F39C12"];
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
    setCurrentIndex((prev) => (prev === 0 ? bgs.length - slidesToShow : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= bgs.length - slidesToShow ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center my-8 relative">
      <h2 className="text-[#63C3D1] text-4xl font-bold mb-4">Nuestros Destacados</h2>

      <div className="relative w-[90%] max-w-5xl flex items-center justify-center">
        <button
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 p-2 bg-transparent hover:opacity-100 transition z-10"
          onClick={prevSlide}
        >
          <img src={arrowLeft} alt="Flecha izquierda" className="w-12 h-12 opacity-70 hover:opacity-100 transition" />
        </button>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}
          >
            {bgs.map((bg, index) => (
              <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / slidesToShow}%` }}>
                <div
                  className="relative border border-gray-200 rounded-lg shadow-lg p-6 group"
                  style={{ width: "300px", height: "200px" }} // Aumentando el tamaño
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Tarjet 
                    bg={bg}  
                    icon={icon}
                    redirectTo={"/perfil_tarjeta"} 
                  />

                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md rounded-lg transition-opacity duration-300 pointer-events-none" />
                  )}

                  {hoveredIndex === index && (
                    <div className="absolute top-4 right-4 flex flex-col space-y-3 z-10 pointer-events-auto">
                      <button className="w-10 h-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                        <img src={newFolderIcon} alt="Guardar en carpeta" className="w-full h-full" />
                      </button>
                      <button className="w-10 h-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                        <img src={favoriteIcon} alt="Favorito" className="w-full h-full" />
                      </button>
                      <button className="w-10 h-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition">
                        <img src={shareIcon} alt="Compartir" className="w-full h-full" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

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
