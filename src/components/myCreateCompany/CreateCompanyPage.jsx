import React, { useState } from "react";
import Header from "../homePageComponents/Header";
import ColorPicker from "./ColorPicker";

const CreateCompanyPage = () => {
    const [logo, setLogo] = useState(null);
    const [color, setColor] = useState("#000000");

    // Manejar la subida del logo
    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-5">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                    <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
                        Crear perfil de empresa
                    </h1>

                    {/* Subir Logo */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Logo</h2>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleLogoChange} 
                            className="mb-3 w-full border rounded px-3 py-2 cursor-pointer"
                        />
                        {logo && (
                            <div className="flex justify-center">
                                <img src={logo} alt="Logo Preview" className="w-32 h-32 object-cover rounded-lg shadow" />
                            </div>
                        )}
                    </div>

                    {/* Selección de color */}
                        <ColorPicker color={color} setColor={setColor} />

                    {/* Botón de Guardar */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
                        Guardar Perfil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCompanyPage;
