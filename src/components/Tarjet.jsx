import React from "react";
import newFolderIcon from "../assets/MiniIcons_tarjet/new_folder_icon.png"; 
import favoriteIcon from "../assets/MiniIcons_tarjet/favorite_icon.png"; 
import shareIcon from "../assets/MiniIcons_tarjet/share_icon.png"; 

const Tarjet = ({ img, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div>
      {/* Imagen con blur en hover */}
      <div className="relative">
        <img
          src={img}
          alt="destacado"
          className={`w-full h-auto rounded-lg transition-all duration-300 ${isHovered ? "blur-md" : "blur-0"}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        {/* Íconos flotantes (aparecen solo en hover) */}
        <div className={`absolute top-2 right-2 flex flex-col space-y-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <button 
            className="w-6 h-6 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition">
              <img 
                src={newFolderIcon} 
                alt="Guardar en carpeta" 
                className="w-full h-full"/>
          </button>
          <button 
            className="w-6 h-6 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition">
              <img 
                src={favoriteIcon} 
                alt="Favorito" 
                className="w-full h-full"/>
          </button>
          <button 
            className="w-6 h-6 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition">
              <img 
                src={shareIcon} 
                alt="Compartir" 
                className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tarjet;