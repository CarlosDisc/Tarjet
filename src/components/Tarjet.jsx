import React from "react";
import { useNavigate } from "react-router-dom";
import { getTextColorForBackground } from "../utils/colorUtils"; 
import icon from "../images/icon.png"; // Imagen de respaldo en caso de que falte el icono

const Tarjet = ({
  bg = "#E63946", // Color de fondo predeterminado
  icon,
  altIcon,
  redirectTo,
  name = "Sin Nombre",
  role = "Sin Rol",
  flipped = false,
  width = "w-64", // Tailwind: w-64 = 250px aprox
  height = "h-40", // Tailwind: h-40 = 150px aprox
}) => {
  const navigate = useNavigate();
  const textColor = getTextColorForBackground(bg);

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  return (
    <div
      className={`relative cursor-pointer ${width} ${height}`} // 🔹 Usa Tailwind en lugar de estilos inline
      style={{ perspective: "1000px" }} // 🔹 Mantiene el efecto 3D
      onClick={redirectTo ? handleClick : undefined} // 🔹 Evita clics innecesarios
      aria-label={`Tarjeta de ${name}`} // 🔹 Mejora accesibilidad
    >
      {/* 🔹 Contenedor que gira */}
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* 📌 Lado A: Icono principal */}
        <div
          className="absolute w-full h-full flex items-center justify-center rounded-lg"
          style={{ backgroundColor: bg, backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-center justify-center">
            <img src={icon || defaultIcon} alt="Icono principal" className="w-16 h-16" />
            <h3 style={{ color: textColor }}>{role}</h3>
          </div>
        </div>

        {/* 📌 Lado B: Nombre, rol y altIcon */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg"
          style={{
            backgroundColor: bg,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {altIcon && <img src={altIcon} alt="Icono alternativo" className="w-12 h-12 mb-2" />}
          <h3 className="text-lg font-semibold" style={{ color: textColor }}>
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
