import React from "react";
import { useNavigate } from "react-router-dom";

// Función para obtener el color del texto adecuado basado en el fondo
const getTextColorForBackground = (bg) => {
  // Convertir el color hexadecimal a RGB
  const hex = bg.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calcular el brillo del color (luminancia)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Si el color es oscuro (brillo < 128), el texto será blanco; si es claro, el texto será negro
  if (brightness < 128) {
    return "#ffffff"; // Blanco para fondos oscuros
  } else {
    return "#000000"; // Negro para fondos claros
  }
};

const TarjetCompany = ({
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
          <img src={icon} alt="Icono principal" className="w-16 h-16" />
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

export default TarjetCompany;
