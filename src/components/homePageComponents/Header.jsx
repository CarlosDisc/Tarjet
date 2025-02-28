import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa"; // Ícono de perfil por defecto
import ButtonCustom from "../Buttons/ButtonCustom";
import ButtonLogo from "../Buttons/ButtonLogo";
import MenuPerfil from "../profilePageComponents/MenuPerfil";
import ArrowDown from "../../assets/arrow_down.png"
import ArrowUp from "../../assets/arrow_up.png"
import Notifications from "../../assets/notification.png"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menú desplegable
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(window.scrollY);
  const navigate = useNavigate();

  const token = Cookies.get("token"); // Obtenemos el token

  const toggleUserMenu = () => setMenuOpen(!menuOpen);

  const handleRedirect = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  const handleRedirectLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 
        ${visible ? "translate-y-0" : "translate-y-[-110%]"} 
        bg-transparent backdrop-blur-md shadow-lg border-b-2 border-gray-300/30`}
    >

      {/* Contenedor Principal */}
      <div className="py-4 px-8 flex flex-col md:flex-row items-center w-full">
        
        {/* Logo */}
        <div className="flex- p-4 w-full items-center justify-between md:w-auto order-1 md:order-1">
          <ButtonLogo />
        </div>
        
        {/* Botones de usuario */}
        <div className="flex-1 p-4 items-center gap-4 order-2 md:order-3">
          {token ? (
            <>
              <div className="flex items-center gap-4">
                <button className="text-gray-700 hover:text-black">
                  <img 
                    src={Notifications} 
                    alt="notifications" 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                </button>
                <button 
                  className="text-gray-700 hover:text-black">
                  <FaUserCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" />
                </button>
                <div className="relative">
                  <button 
                    onClick={toggleUserMenu} 
                    className="flex items-center text-gray-700 hover:text-black">
                      <img 
                        src={menuOpen ? ArrowUp : ArrowDown} 
                        alt="menu" 
                        className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain" />
                  </button>
                  {menuOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <MenuPerfil/>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
          <>
            <div className="flex gap-4 items-center justify-center">
                  <a
                    href="#"
                    className="text-[#63C3D1] font-medium text-sm"
                    onClick={handleRedirectLogin}
                  >
                    Iniciar sesión
                  </a>
                  <div className="inline-flex">
                    <ButtonCustom text="Registrarse" onClick={handleRedirect} className="px-3 py-1 text-xs" />
                  </div>
              </div>
            </>
          )}
        </div>
  
        {/* Menú de Navegación */}
        <nav className="w-full mt-4 md:mt-0 flex-3 p-4 justify-center md:justify-center gap-4 order-last md:order-2">
          <div className="flex">
              <a href="#" className="flex-1 text-[#717070] hover:text-black font-medium text-sm text-center">
                Inicio
              </a>
              <a href="#" className="flex-1 text-[#717070] hover:text-black font-medium text-sm text-center">
                Sobre Nosotros
              </a>
              <a href="#" className="flex-1 text-[#717070] hover:text-black font-medium text-sm text-center">
                Nuestros Planes
              </a>
              <a href="#" className="flex-1 text-[#717070] hover:text-black font-medium text-sm text-center">
                Contáctanos
              </a>
          </div>
        </nav>
  
      </div>
    </header>
  );
      
};

export default Header;
