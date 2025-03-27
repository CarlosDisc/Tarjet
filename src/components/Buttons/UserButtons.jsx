import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MenuPerfil from "../myProfilePageComponents/MenuPerfil";
import ButtonCustom from "../Buttons/ButtonCustom";
import Notifications from "../../assets/notification.png";
import UserProfile from "../../assets/profile/userProfile.png";
import ArrowUp from "../../assets/arrows/arrow_up.png";
import ArrowDown from "../../assets/arrows/arrow_down.png";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const UserButtons = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleUserMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const token = Cookies.get("token");
  const handleRedirectLogin = useCallback(() => {
      navigate("/login");
    }, [navigate]);

    const handleRedirect = useCallback(() => {
        navigate("/create-account");
    }, [navigate]);

  return (
    <>
      {/* Botones en pantallas grandes */}
      <div className="hidden md:flex items-center gap-4">
      {token ? (
              <>
                <button className="text-gray-700 hover:text-black">
                  <img 
                    src={Notifications} 
                    alt="notifications" 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" 
                  />
                </button>
                <button className="text-gray-700 hover:text-black">
                  <img 
                    src={UserProfile} 
                    alt="userProfile"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
                  />
                </button>
                <div className="relative">
                  <button 
                      onClick={toggleUserMenu} 
                      className="flex items-center text-gray-700 hover:text-black transition-colors duration-300"
                  >
                      <motion.img 
                          src={menuOpen ? ArrowDown : ArrowDown} 
                          alt="menu" 
                          className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain"
                          animate={{ rotate: menuOpen ? 180 : 0 }} // Rotación suave
                          transition={{ duration: 0.3, ease: "easeInOut" }} 
                      />
                  </button>

                  <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg py-2 z-50 ${menuOpen ? 'block' : 'hidden'}`}
                  >
                      <MenuPerfil/>
                  </motion.div>
              </div>
              </>
        ) : (
          <>
            <a 
                href="#" 
                className="text-[#63C3D1] font-medium text-sm" 
                onClick={handleRedirectLogin}>
                    Iniciar sesión
            </a>
            <div className="inline-flex">
              <ButtonCustom text="Registrarse" onClick={handleRedirect} />
            </div>
          </>
        )}
      </div>
      {/* Botones en móviles */}
        <div className="flex md:hidden flex-col items-center gap-2 w-full mt-4">
        {token ? (
            <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-black">
                <img 
                    src={Notifications} 
                    alt="notifications" 
                    className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-black">
                <img 
                    src={UserProfile} 
                    alt="userProfile" 
                    className="w-6 h-6" />
            </button>
            <div className="relative">
                <button onClick={toggleUserMenu} className="flex items-center text-gray-700 hover:text-black">
                    <img 
                        src={menuOpen ? ArrowUp : ArrowDown} 
                        alt="menu" 
                        className="w-6 h-6" />
                </button>
                    {menuOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        <MenuPerfil />
                    </div>
                )}
            </div>
            </div>
        ) : (
            <div className="flex flex-col items-center gap-2">
            <button 
                className="text-[#63C3D1] font-medium text-sm" 
                onClick={handleRedirectLogin}>
                    Iniciar sesión
            </button>
            <ButtonCustom 
                text="Registrarse" 
                onClick={handleRedirect} />
            </div>
        )}
        </div>
    </>
  );
};

export default UserButtons;
