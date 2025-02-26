import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token'); //Eliminar el token
        navigate('/login'); //redirigir login
    };

    return(
        <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Cerrar Sesión
            </button>
    );
};
export default Logout;