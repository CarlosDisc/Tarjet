import React from "react";
import { useNavigate } from "react-router-dom";

const TarjetCompany = ({
  bg,
  textColor,
  icon,
  altIcon,
  redirectTo,
  name,
  slogan,
  website,
  flipped,
  width = "250px",
  height = "150px",
  iconSize = "w-20 h-20", // Valor por defecto
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  return (
    <div
      className="relative cursor-pointer"
      style={{ width, height, perspective: "1000px" }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* 📌 Lado A: Icono y nombre de la empresa */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg"
          style={{
            backgroundColor: bg,
            backfaceVisibility: "hidden",
          }}
        >
          <img src={icon} alt="Icono principal" className={`${iconSize}`} />
          <h3 className="text-3xl font-semibold " style={{ color: textColor }}>
            {name}
          </h3>
        </div>

        {/* 📌 Lado B: Información de contacto */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg p-4"
          style={{
            backgroundColor: bg,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {altIcon && <img src={altIcon} alt="Icono alternativo" className="w-12 h-12 mb-2" />}
          <p className="text-2xl font-semibold" style={{ color: textColor }}>
            <strong>Web:</strong> {website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarjetCompany;
