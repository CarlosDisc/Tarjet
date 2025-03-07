import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigateHome = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };

  return (
    <nav className="w-full mt-4 md:mt-0 flex justify-start md:flex-1">
      <div className="flex w-full md:w-auto justify-around md:justify-start md:space-x-6">
        <a
          href="#"
          onClick={handleNavigateHome}
          className="text-[#717070] hover:text-black font-medium text-sm text-center"
        >
          Inicio
        </a>
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Sobre Nosotros
        </a>
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Nuestros Planes
        </a>
        <a href="#" className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Contáctanos
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
