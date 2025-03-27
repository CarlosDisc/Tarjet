import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa'; // Importa los iconos

const Share = () => {
    return (
        <div className="flex justify-center gap-6">
            {/* Icono de Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} className="text-purple-600 hover:text-purple-800" />
            </a>

            {/* Icono de Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} className="text-blue-600 hover:text-blue-800" />
            </a>

            {/* Icono de Twitter (X) */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={40} className="text-blue-400 hover:text-blue-600" />
            </a>

            {/* Icono de TikTok */}
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={40} className="text-black hover:text-gray-700" />
            </a>

            {/* Icono de LinkedIn */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} className="text-blue-700 hover:text-blue-900" />
            </a>
        </div>
    );
};

export default Share;
