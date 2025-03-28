import React from 'react';
import ButtonCustom from '../Buttons/ButtonCustom';
import UserProfile from "../../images/profileDefault.png";

const ProfileForm = () => {
  return (
    <div className="w-full mx-auto p-4 md:p-8">
      {/* Sección de la imagen de perfil */}
      <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
        <img
          src={UserProfile} // Reemplaza con la URL real de la imagen
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full object-cover border-gray-300 shadow-lg"
        />
        <div className="text-center md:text-left">
          <p className="text-gray-700 font-semibold">Foto de perfil</p>
          <button className="text-[#63C3D1] hover:underline text-sm">
            Editar foto de perfil
          </button>
        </div>
      </div>
  
      {/* Formulario */}
      <form className="space-y-4">
        {/* Nombre y Apellidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Nombre</label>
            <input
              type="text"
              className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Apellidos</label>
            <input
              type="text"
              className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
              placeholder="Tus apellidos"
            />
          </div>
        </div>
  
        {/* Número */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Número</label>
          <input
            type="text"
            className="border-gray-400 shadow-lg w-full md:w-auto px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
            placeholder="Tu número"
          />
        </div>
  
        {/* ¿Dónde estás? */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">¿Dónde estás?</label>
          <select className="border-gray-400 shadow-lg w-full md:w-1/2 px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]">
            <option>Ciudad</option>
            <option>La Paz</option>
            <option>Cochabamba</option>
            <option>Santa Cruz</option>
          </select>
        </div>
  
        {/* Correo electrónico */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Correo electrónico</label>
          <input
            type="email"
            className="border-gray-400 shadow-lg w-full md:w-1/2 px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
            placeholder="Tu correo electrónico"
          />
        </div>
  
        {/* Botón de editar */}
        <div className="w-full md:w-1/4 flex justify-start">
          <ButtonCustom text="Editar Perfil" />
        </div>
      </form>
    </div>
  );
}
export default ProfileForm;