import React from "react";
import homePage from "../../images/homePage.jpg";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Destacados from "./Destacados";
import Categories from "./Categories";
import HowToApply from "./HowToApply";
import ContacUs from "./ContactUs";
import Information from "./Information";
import Logout from "../Logout";

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
          <SearchBar />
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

      <div className="relative z-20">
        <Logout/>
      </div>

    </div>
  );
};

export default HomePage;
