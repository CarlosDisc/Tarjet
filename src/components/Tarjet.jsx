import React from "react";
import { useNavigate } from "react-router-dom";
import {getTextColorForBackground} from "../utils/colorUtils"; // Asegúrate de importar la función desde el archivo correcto

const Tarjet = ({
  bg,
  icon,
  altIcon,
  redirectTo,
  name,
  role,
  flipped,
  width = "250px",
  height = "150px",
}) => {
  const navigate = useNavigate();

  // Obtener el color de texto adecuado para el fondo
  const textColor = getTextColorForBackground(bg);

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  return (
    <div
      className="relative cursor-pointer"
      style={{ width, height, perspective: "1000px" }} // 🔹 Aplica la perspectiva
      onClick={handleClick}
    >
      {/* 🔹 Contenedor que gira */}
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d", // 🔹 Permite la rotación en 3D
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* 📌 Lado A: Icono principal */}
        <div
          className="absolute w-full h-full flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: bg,
            backfaceVisibility: "hidden", // 🔹 Oculta este lado cuando se gira
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <img src={icon} alt="Icono principal" className="w-16 h-16" />
            <h3 style={{ color: textColor }}>{role}</h3> {/* Aplica el color de texto */}
          </div>
        </div>

        {/* 📌 Lado B: Nombre, rol y altIcon */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg"
          style={{
            backgroundColor: bg, // 🔹 Mantiene el mismo fondo
            transform: "rotateY(180deg)", // 🔹 Lo rota 180°
            backfaceVisibility: "hidden", // 🔹 Oculta este lado cuando no está girado
          }}
        >
          {altIcon && <img src={altIcon} alt="Icono alternativo" className="w-12 h-12 mb-2" />}
          <h3
            className="text-lg font-semibold"
            style={{
              color: textColor, // 🔹 Aplica el color de texto adecuado
            }}
          >
            {name}
          </h3>
          <p className="text-sm" style={{ color: textColor }}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tarjet;