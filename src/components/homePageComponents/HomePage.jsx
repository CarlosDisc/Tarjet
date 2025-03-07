import React from "react";
import homePage from "../../images/homePage.jpg";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Destacados from "./Destacados";
import Categories from "./Categories";
import HowToApply from "./HowToApply";
import ContacUs from "./ContactUs";
import Information from "./Information";


const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Header fijo */}
      <Header />

      {/* Sección con fondo solo para el SearchBar */}
      <div className="relative z-10 p-10 min-h-[500px] pt-24"> {/* Agrega un padding-top para evitar que el contenido se oculte detrás del header fijo */}
        {/* Imagen de fondo y overlay en este div */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homePage})` }}
        />
        <div className="absolute inset-0 bg-white opacity-60"></div>

        {/* Contenido (SearchBar) encima del fondo */}
        <div className="relative z-20">
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient mb-6">
                Encuéntralo Aquí
              </h1>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Sección sin fondo para Destacados */}
      <div className="relative z-20">
        <Destacados />
      </div>

      <div className="relative z-20">
        <Categories />
      </div>

      <div className="relative z-20">
        <HowToApply />
      </div>

      <div className=" relative z-20">
        <ContacUs/>
      </div>

      <div className="relative z-20">
        <Information/>
      </div>
    </div>
  );
};

export default HomePage;
