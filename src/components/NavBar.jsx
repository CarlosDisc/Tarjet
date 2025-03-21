import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="w-full mt-4 md:mt-0 flex justify-start md:flex-1">
      <div className="flex w-full md:w-auto justify-around md:justify-start md:space-x-6">
        <button 
          onClick={() => handleNavigate("/")} 
          className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Inicio
        </button>
        <button 
          onClick={() => handleNavigate("/about_us")} 
          className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Sobre Nosotros
        </button>
        <button 
          onClick={() => handleNavigate("/our_plans")} 
          className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Nuestros Planes
        </button>
        <button 
          onClick={() => handleNavigate("/contact_us")} 
          className="text-[#717070] hover:text-black font-medium text-sm text-center">
          Contactanos
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
