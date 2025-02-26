import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//crear contexto de autenticacion
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    //cargar token al iniciar la app
    useEffect(() => {
        const savedToken = Cookies.get("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    //funcion de login
    const login = (newToken) => {
        setToken(newToken);
        Cookies.set('token', newToken, { expires: 1 }); //1 dia
        navigate('/homepage'); //redirigir despues de iniciar sesion
    };

    //funcion de logout
    const logout = () => {
        setToken(null);
        Cookies.remove("token");
        navigate("/login"); //redirigir despues de cerrar sesion
    };

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);