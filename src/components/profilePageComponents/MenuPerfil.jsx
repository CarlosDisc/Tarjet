import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Favorite_profile from "../../assets/profile/favorite_profile.png"
import Perfil_profile from "../../assets/profile/perfil_profile.png"
import Suscripcion_profile from "../../assets/profile/suscripcion_profile.png"
import Tarjets_profile from "../../assets/profile/tarjets_profile.png"

const MenuPerfil = () => {
    const handleLogout = () => {
        Cookies.remove("token");
        navigate("/login");
    };
    const navigate = useNavigate();

    const handleProfileClick = () => {
      navigate("/profile");
    };

    return (
        <div >
          <button 
            onClick={handleProfileClick} 
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              <img src={Perfil_profile} alt="Perfil" className="w-5 h-5" />
            Perfil
          </button>
          <button 
            href="#" 
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              <img src={Tarjets_profile} alt="Mis Tarjetas" className="w-5 h-5" />
            Mis Tarjetas
          </button>
          <button 
            href="#" 
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              <img src={Favorite_profile} alt="Favoritos" className="w-5 h-5" />
            Favoritos
          </button>
          <button 
            href="#" 
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              <img src={Suscripcion_profile} alt="Suscripción" className="w-5 h-5" />
            Suscripción
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Cerrar sesión
          </button>
        </div>
      );
};
export default MenuPerfil;