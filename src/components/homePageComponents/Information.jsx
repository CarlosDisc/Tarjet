import React from "react";
import logo from "../../images/logo.jpg";
import Face from "../../assets/facebook_icon.png";
import Instagram from "../../assets/instagram_icon.png";
import X from "../../assets/x_icon.png";
import Linkedin from "../../assets/linkedin.png";

const ContactUs = () => {
  return (
    <div className="bg-black py-8 px-12">
      <div className="grid grid-cols-4 gap-8 text-white">
        
        {/* Columna 1 - Logo y Descripción */}
        <div>
          <div className="flex items-center mb-2">
            <img src={logo} alt="Logo" className="h-10 mr-2" />
          </div>
          <div className="text-lg font-bold">TARJET</div>
          <p className="text-[#8F8F8F] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Columna 2 - Información */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold mb-2">Información</h2>
          <a href="#" className="text-[#8F8F8F] hover:text-white w-fit">Precios</a>
          <a href="#" className="text-[#8F8F8F] hover:text-white w-fit">Sobre nosotros</a>
          <a href="#" className="text-[#8F8F8F] hover:text-white w-fit">Iniciar un proyecto</a>
          <a href="#" className="text-[#8F8F8F] hover:text-white w-fit">Contacto</a>
        </div>



        {/* Columna 3 - Legal y Soporte */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Legal</h2>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Términos de uso</a>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Acuerdo de licencia</a>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Política de privacidad</a>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Información de copyright</a>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Política de cookies</a>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Ajuste de cookies</a>

          <h2 className="text-lg font-bold mt-4 mb-2">Soporte</h2>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Preguntas frecuentes</a>
          <a href="" className="text-[#8F8F8F] hover:text-white w-fit">Contactar</a>
        </div>

        {/* Columna 4 - Redes Sociales */}
        <div>
            <h2 className="text-lg font-bold">Nuestras Redes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img src={Face} alt="Facebook" className="w-8 h-8 rounded-full" />
                </button>

                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img src={Instagram} alt="Instagram" className="w-8 h-8 rounded-full" />
                </button>

                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img src={X} alt="X" className="w-8 h-8 rounded-full" />
                </button>

                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 rounded-full" />
                </button>
              </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
