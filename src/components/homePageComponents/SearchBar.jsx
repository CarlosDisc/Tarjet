import { useState } from "react";
import ArrowDown from '../../assets/arrow_down.png';
import Ex from '../../assets/ex.png';
import Map_Pin from '../../assets/map_pin.png';
import Categorie from '../../assets/categorie.png';
import SearchIcon from '../../assets/search_icon.png';
import Cookies from "js-cookie";

const SearchBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  // Opciones de categorías y ciudades
  const categories = ["Tecnología", "Ropa", "Electrónica", "Hogar"];
  const cities = ["La Paz", "Santa Cruz", "Cochabamba", "Tarija"];
  const countries = ["Bolivia", "Argentina", "Chile", "Perú"];

  const token = Cookies.get("token"); // Obtenemos el token

  return (
        <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-4 w-full max-w-auto">
          {token ? (
            <>
              {/* Input de búsqueda */}
              <div className="relative flex-1">
                <input
                  type="search"
                  id="search-input"
                  placeholder="Buscador"
                  className="h-12 pl-10 pr-12 text-lg text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Botón para borrar */}
                <button
                  onClick={() => document.getElementById("search-input").value = ""}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <img src={Ex} alt="borrar" className="w-3 h-3" />
                </button>
              </div>
  
              {/* Separador */}
              <div className="w-px h-6 bg-gray-300 mx-4 sm:w-full sm:h-px sm:mx-0 md:w-px md:h-6 md:mx-4"></div>

              {/* Categorías */}
              <div className="relative flex-1">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2  rounded-lg"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  <img 
                    src={Categorie} 
                    alt="Categorie icon"
                    className="w-5 h-5" 
                  />
                  
                  <span className="text-[#979797]">Categorías</span>
                  <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />
                </button>
  
                {/* Dropdown Categorías */}
                {showCategories && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
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
  
              {/* Ciudad */}
              <div className="relative flex-1">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2  rounded-lg"
                  onClick={() => setShowCities(!showCities)}
                >
                  <img 
                    src={Map_Pin} 
                    alt="Categorie icon"
                    className="w-5 h-5" 
                  />
                  
                  <span className="text-[#979797]">Ciudad</span>
                  <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />
                </button>
  
                {/* Dropdown Ciudades */}
                {showCities && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    {cities.map((city, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowCities(false)}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
  
              {/* Separador */}
              <div className="w-px h-6 bg-gray-300 mx-4"></div>
  
              {/* País */}
              <div className="relative flex-1">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2  rounded-lg"
                  onClick={() => setShowCountries(!showCountries)}
                >
                  <img 
                    src={Map_Pin} 
                    alt="Categorie icon"
                    className="w-5 h-5" 
                  />
                  
                  <span className="text-[#979797]">País</span>
                  <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />
                </button>
  
                {/* Dropdown Países */}
                {showCountries && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    {countries.map((country, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowCountries(false)}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                )}
                
              </div>
              <button className="ml-4 bg-[#63C3D1] text-white p-3 rounded-full shadow-md">
                <img src={SearchIcon} alt="Search" className="w-6 h-6" />
              </button>
              
            </>
          ) : (
            <>
              {/* Categorías */}
              <div className="relative flex-1">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2  rounded-lg"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  <img 
                    src={Categorie} 
                    alt="Categorie icon"
                    className="w-5 h-5" 
                  />
                  
                  <span className="text-[#979797]">Categorías</span>
                  <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />
                </button>
  
                {/* Dropdown Categorías */}
                {showCategories && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
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
  
              {/* Ciudad */}
              <div className="relative flex-1">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-black w-full px-3 py-2  rounded-lg"
                  onClick={() => setShowCities(!showCities)}
                >
                  <img 
                    src={Map_Pin} 
                    alt="Categorie icon"
                    className="w-5 h-5" 
                  />
                  
                  <span className="text-[#979797]">Ciudad</span>
                  <img src={ArrowDown} alt="arrow down" className="ml-auto w-4 h-4 filter brightness-0 opacity-80" />
                </button>
  
                {/* Dropdown Ciudades */}
                {showCities && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                    {cities.map((city, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
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
                <img src={SearchIcon} alt="Search" className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
  );
  
  
};

export default SearchBar;
