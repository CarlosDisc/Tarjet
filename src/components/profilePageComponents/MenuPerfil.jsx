import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import FavoriteProfile from "../../assets/profile/favorite_profile.png";
import FavoriteProfileSelected from "../../assets/profile/favorite_profile_selected.png";
import PerfilProfile from "../../assets/profile/perfil_profile.png";
import PerfilProfileSelected from "../../assets/profile/perfil_profile_selected.png";
import SuscripcionProfile from "../../assets/profile/suscripcion_profile.png";
import SuscripcionProfileSelected from "../../assets/profile/suscripcion_profile_selected.png";
import TarjetsProfile from "../../assets/profile/tarjets_profile.png";
import TarjetsProfileSelected from "../../assets/profile/tarjets_profile_selected.png";
import UserProfile from "../../assets/profile/userProfile.png";

const MenuPerfil = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("profile");

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  const menuItems = [
    { key: "profile", label: "Perfil", path: "/profile", icon: PerfilProfile, iconSelected: PerfilProfileSelected },
    { key: "mycards", label: "Mis Tarjetas", path: "/mycards", icon: TarjetsProfile, iconSelected: TarjetsProfileSelected },
    { key: "favorites", label: "Favoritos", path: "/favorites", icon: FavoriteProfile, iconSelected: FavoriteProfileSelected },
    { key: "subscription", label: "Suscripción", path: "/subscription", icon: SuscripcionProfile, iconSelected: SuscripcionProfileSelected }
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <div className="flex justify-center items-center">
        <img 
          src={UserProfile} 
          alt="" 
          className="w-20 h-20 rounded-full object-cover mb-2 border-gray-300 shadow-lg" />
      </div>
      <div className="flex flex-col items-center text-center">
        <p>@nombredeusuario</p>
        <p>Correo Electrónico</p>
      </div>
      {menuItems.map((item) => (
        <button
          key={item.key}
          onClick={() => {
            setSelected(item.key);
            navigate(item.path);
          }}
          className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          onMouseEnter={(e) => e.currentTarget.children[0].src = item.iconSelected}
          onMouseLeave={(e) => e.currentTarget.children[0].src = selected === item.key ? item.iconSelected : item.icon}
        >
          <img 
            src={selected === item.key ? item.iconSelected : item.icon} 
            alt={item.label} 
            className="w-5 h-5" />
          {item.label}
        </button>
      ))}
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
