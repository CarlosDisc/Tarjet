import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from '../../images/logo.jpg';

const ButtonLogo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const token = Cookies.get("token");
        if (token) {
            navigate("/homepage"); //si hay token ir a homepage
        } else {
            navigate("/"); //si no hay, ir a "/"
        }
    }
    return (
        
            <button 
                    onClick={handleClick} 
                            className="flex items-center justify-center space-x-2 ">
                                    <img src={logo} alt="logo" className="w-24 h-auto" />
                                    <h1 className="text-2xl font-bold text-gray-800 font-vector" style={{ fontFamily: 'Vector, sans-serif' }}>
                                    TARJET</h1>
            </button>
    );
};
export default ButtonLogo;