import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Share = ({ bg }) => {
    return (
        <div className="w-full px-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">NUESTRAS REDES SOCIALES</h1>
            <div
                className="flex flex-col items-center justify-center mt-4 p-2 rounded-xl w-full"
                style={{ backgroundColor: bg }}
            >
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 bg-white shadow-md rounded-xl w-full max-w-4xl p-4 sm:p-6">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-purple-600 hover:text-purple-800 transition-transform duration-300 hover:scale-110" size={36} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110" size={36} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-blue-400 hover:text-blue-600 transition-transform duration-300 hover:scale-110" size={36} />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-black hover:text-gray-700 transition-transform duration-300 hover:scale-110" size={36} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 hover:text-blue-900 transition-transform duration-300 hover:scale-110" size={36} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Share;
