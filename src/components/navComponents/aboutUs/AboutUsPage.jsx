import React from "react";
import Header from "../../homePageComponents/Header";
import homePage from "../../../images/homePage.jpg";
import DesignSolution from "./DesignSolution";
import DesignSolution2 from "./DesignSolution2";
import Information from "../../homePageComponents/Information";

const AboutUsPage = () => {
    return (
        <div className="relative">
        <Header />
        {/* Sección principal con imagen de fondo */}
        <div className="relative h-[500px] flex items-center justify-center"> 
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${homePage})` }}
            />
            {/* Capa de opacidad */}
            <div className="absolute inset-0 bg-white opacity-60"></div>
            
            {/* Texto centrado en la imagen */}
            <div className="absolute bottom-10 left-10 z-10">
                <h1 className="text-white text-3xl font-bold drop-shadow-lg">
                    SOBRE NOSOTROS
                </h1>
            </div>
        </div> 
        {/* Secciones adicionales */}
        <div className="space-y-16 py-10">
            <DesignSolution />
            <DesignSolution2 />
            <Information />
        </div>
    </div>
    
    );
}
export default AboutUsPage;