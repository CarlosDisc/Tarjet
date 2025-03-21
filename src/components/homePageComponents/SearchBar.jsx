import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

import ArrowDown from '../../assets/arrows/arrow_down.png';
import Ex from '../../assets/ex.png';
import Map_Pin from '../../assets/map_pin.png';
import Categorie from '../../assets/categorie.png';
import SearchIcon from '../../assets/search_icon.png';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Categorías");
  const [selectedCity, setSelectedCity] = useState("Ciudad");
  const [selectedCountry, setSelectedCountry] = useState("País");

  const [showCategories, setShowCategories] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  // Opciones de categorías y ciudades
  const categories = ["Tecnología", "Ropa", "Electrónica", "Hogar"];
  const cities = ["La Paz", "Santa Cruz", "Cochabamba", "Tarija"];
  const countries = ["Bolivia", "Argentina", "Chile", "Perú"];

  const navigate = useNavigate();
  const token = Cookies.get("token"); // Obtenemos el token

  const handleSearch = () => {
    const params = new URLSearchParams();
      if (searchTerm) params.append("query", searchTerm);
      if (selectedCategory !== "Categorías") params.append("category", selectedCategory);
      if (selectedCity !== "Ciudad") params.append("city", selectedCity);
      if (selectedCountry !== "País") params.append("country", selectedCountry);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-4 w-full max-w-auto">
      {token ? (
        <>
          {/* Input de búsqueda */}
          <div className="relative flex-1">
            <input
              type="text"
              id="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscador"
              className="h-12 pl-10 pr-12 text-lg text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {/* Botón para borrar */}
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <img 
                src={Ex} 
                alt="borrar" 
                className="w-3 h-3" />
            </button>
          </div>
  
          {/* Separador */}
          <div className="w-full h-px bg-gray-300 my-4 sm:w-px sm:h-6 sm:mx-4 sm:my-0"></div>
  
          {/* Categorías */}
          <div className="relative flex-1">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2 rounded-lg"
              onClick={() => setShowCategories(!showCategories)}
            >
              <img src={Categorie} alt="Categorie icon" className="w-5 h-5" />
              <span className={selectedCategory !== "Categorías" ? "text-[#979797]" : "text-[#979797]"}>
                {selectedCategory}
              </span>
              <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 opacity-80" />
            </button>
            {showCategories && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategories(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Separador */}
          <div className="w-full h-px bg-gray-300 my-4 sm:w-px sm:h-6 sm:mx-4 sm:my-0"></div>
  
          {/* Ciudad */}
          <div className="relative flex-1">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2 rounded-lg"
              onClick={() => setShowCities(!showCities)}
            >
              <img src={Map_Pin} alt="City icon" className="w-5 h-5" />
              <span className={selectedCity !== "Ciudad" ? "text-[#979797]" : "text-[#979797]"}>
                {selectedCity}
              </span>
              <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 opacity-80" />
            </button>
            {showCities && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                {cities.map((city, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCities(false);
                    }}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Separador */}
          <div className="w-full h-px bg-gray-300 my-4 sm:w-px sm:h-6 sm:mx-4 sm:my-0"></div>
  
          {/* País */}
          <div className="relative flex-1">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2 rounded-lg"
              onClick={() => setShowCountries(!showCountries)}
            >
              <img src={Map_Pin} alt="Country icon" className="w-5 h-5" />
              <span className={selectedCountry !== "País" ? "text-[#979797]" : "text-[#979797]"}>
                {selectedCountry}
              </span>
              <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 opacity-80" />
            </button>
            {showCountries && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                {countries.map((country, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountries(false);
                    }}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Botón de búsqueda */}
          <button onClick={handleSearch} className="bg-[#63C3D1] text-white p-3 rounded-full shadow-md">
            <img 
              src={SearchIcon} 
              alt="Search" 
              className="w-6 h-6" />
          </button>
        </>
      ) : (
        <>
          {/* Categorías */}
          <div className="relative flex-1">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2 rounded-lg"
              onClick={() => setShowCategories(!showCategories)}
            >
              <img src={Categorie} alt="Categorie icon" className="w-5 h-5" />
              <span className={selectedCategory !== "Categorías" ? "text-[#979797]" : "text-[#979797]"}>
                {selectedCategory}
              </span>
              <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 opacity-80" />
            </button>
            {showCategories && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategories(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Separador */}
          <div className="w-full h-px bg-gray-300 my-4 sm:w-px sm:h-6 sm:mx-4 sm:my-0"></div>
  
          {/* Ciudad */}
          <div className="relative flex-1">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2 rounded-lg"
              onClick={() => setShowCities(!showCities)}
            >
              <img src={Map_Pin} alt="City icon" className="w-5 h-5" />
              <span className={selectedCity !== "Ciudad" ? "text-[#979797]" : "text-[#979797]"}>
                {selectedCity}
              </span>
              <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 opacity-80" />
            </button>
            {showCities && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                {cities.map((city, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCities(false);
                    }}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
  
          {/* Botón de búsqueda */}
          <button onClick={handleSearch} className=" bg-[#63C3D1] text-white p-3 rounded-full shadow-md">
            <img 
              src={SearchIcon} 
              alt="Search" 
              className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};
export default SearchBar;
