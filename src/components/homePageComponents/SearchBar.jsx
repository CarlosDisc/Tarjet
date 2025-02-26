import { useState } from "react";
import { FaTh, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import ArrowDown from '../../assets/arrow_down.png';

const SearchBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showCities, setShowCities] = useState(false);

  // Opciones de categorías y ciudades
  const categories = ["Tecnología", "Ropa", "Electrónica", "Hogar"];
  const cities = ["La Paz", "Santa Cruz", "Cochabamba", "Tarija"];

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      
      <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Encuéntralo Aquí
      </h1> 
      {/*<h1 className="text-[#717070] text-4xl mb-20 ">Encuéntralo Aqui</h1>*/}

      <div className="relative flex items-center bg-white rounded-lg shadow-md p-4 w-full max-w-lg">
        
        {/* Botón de Categorías */}
        <div className="relative flex-1">
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-black w-full"
            onClick={() => setShowCategories(!showCategories)}
          >
            <FaTh />
            <span className="text-[#979797]">Categorías</span>
            <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />

          </button>

          {/* Dropdown de Categorías */}
          {showCategories && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowCategories(false)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Separador */}
        <div className="w-px h-6 bg-gray-300 mx-4"></div>

        {/* Botón de Ciudad */}
        <div className="relative flex-1">
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-black w-full"
            onClick={() => setShowCities(!showCities)}
          >
            <FaMapMarkerAlt />
            <span className="text-[#979797]">Ciudad</span>
            <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />

          </button>

          {/* Dropdown de Ciudades */}
          {showCities && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
              {cities.map((city, index) => (
                <button
                  key={index}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowCities(false)}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Botón de búsqueda */}
        <button className="ml-4 bg-[#63C3D1] text-white p-3 rounded-full shadow-md">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
