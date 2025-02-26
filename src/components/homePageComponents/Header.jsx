import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa"; // Ícono de perfil por defecto
import ButtonCustom from "../Buttons/ButtonCustom";
import ButtonLogo from "../Buttons/ButtonLogo";
import ArrowDown from "../../assets/arrow_down.png"
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

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

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
                  bg-transparent backdrop-blur-md shadow-lg border-b border-gray-300/30`}
    >
      <div className="py-4 px-8 flex justify-start w-full gap-4">
        {/* Logo */}
        <ButtonLogo />

        {/* Menú principal */}
        <nav className="flex items-center justify-between w-full">
          
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm flex-1 text-center">
          Inicio
        </a>
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm flex-1 text-center">
          Sobre Nosotros
        </a>
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm flex-1 text-center">
          Nuestros Planes
        </a>
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm flex-1 text-center">
          Contáctanos
        </a>

          {/* Si el usuario está autenticado, mostramos los iconos */}
          {token ? (
            <div className="flex items-center space-x-4">
              {/* Notificaciones */}
              <button className="text-gray-700 hover:text-black">
                <img src={Notifications} alt="menu" className="w-6 h-auto" />
              </button>

              {/* Foto de perfil (Por defecto un icono si no hay imagen) */}
              <button className="text-gray-700 hover:text-black">
                <FaUserCircle size={26} />
              </button>

              {/* Menú desplegable */}
              <div className="relative">
                <button onClick={toggleUserMenu} className="flex items-center text-gray-700 hover:text-black">
                <img src={ArrowDown} alt="menu" className="w-6 h-auto" />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Perfil
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Mis Tarjetas
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Favoritos
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Suscripción
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Si el usuario NO está autenticado, mantenemos el menú original
            <>
            <div className="w-auto flex justify-center items-center gap-5">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
