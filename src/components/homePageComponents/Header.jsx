import React, { useState, useEffect, useRef } from "react";
import ButtonLogo from "../Buttons/ButtonLogo";
import UserButtons from "../Buttons/UserButtons";
import NavBar from "../NavBar";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(window.scrollY);
  
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
  <div className="py-4 px-8 flex flex-col md:flex-row md:items-center md:justify-between w-full">
    
    {/* Sección superior: Logo y Botones de Usuario alineados */}
    <div className="flex w-full md:w-auto items-center justify-between">
      {/* Botón de logo */}
      <div>
        <ButtonLogo />
      </div>

      {/* Botones de usuario (visible solo en móvil) */}
      <div className="md:hidden">
        <UserButtons />
      </div>
    </div>

    {/* Menú de Navegación (cambia de lugar en pantallas grandes) */}
    <div className="w-full md:w-auto mt-4 md:mt-0 order-1 md:order-none">
      <NavBar />
    </div>

    {/* Botones de usuario (visible solo en desktop) */}
    <div className="hidden md:block">
      <UserButtons />
    </div>
  </div>
</header>
  );
};

export default Header;
