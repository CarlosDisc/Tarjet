import React, { useState } from "react";
import profileDefault from "../../images/profileDefault.png"

const TemplateStyle = () => {
    const [companyName, setCompanyName] = useState("");
    const [slogan, setSlogan] = useState("");
    const [design, setDesign] = useState("center");
    const [logo, setLogo] = useState(profileDefault);
    // Manejar la carga del logo
    
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
        <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center w-full">
            {/* Subida de Logo */}
            <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Logo</h2>
                        
                        {/* Contenedor con flexbox para imagen y botón */}
                        <div className="flex items-center justify-between">
                            {/* Imagen de vista previa */}
                            {logo && (
                                <div className="flex justify-center mr-4">
                                    <img
                                        src={logo}
                                        alt="Logo Preview"
                                        className="w-32 h-32 object-cover rounded-lg shadow"
                                    />
                                </div>
                            )}

                            {/* Input de archivo oculto */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                id="logo-input"
                                className="hidden" // Ocultamos el input real
                            />
                            
                            {/* Botón personalizado */}
                            <label
                                htmlFor="logo-input"
                                className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                            >
                                Subir Logo
                            </label>
                        </div>
                    </div>

            {/* Campos de Texto */}
            <input
                type="text"
                placeholder="Nombre de la Empresa"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-64 text-center focus:ring-2 focus:ring-blue-400 transition mb-3"
            />
            <input
                type="text"
                placeholder="Eslogan de la Empresa"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-64 text-center focus:ring-2 focus:ring-blue-400 transition mb-6"
            />

            {/* Selector de Diseño */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Selecciona un Diseño</h3>
                <div className="flex gap-4">
                    <button
                        className={`px-4 py-2 rounded-lg transition ${design === "center" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setDesign("center")}
                    >
                        Centro
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg transition ${design === "right" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setDesign("right")}
                    >
                        Derecha
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg transition ${design === "left" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setDesign("left")}
                    >
                        Izquierda
                    </button>
                </div>
            </div>

            {/* Vista Previa */}
            <div className="w-full flex justify-center">
                <div className="w-80 h-48 bg-gray-100 border rounded-lg flex p-4 shadow-md relative">
                    {design === "center" && (
                        <div className="w-full flex flex-col items-center justify-center text-center">
                            {logo && <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />}
                            <p className="font-bold">{companyName || "Nombre"}</p>
                            <p className="text-sm text-gray-600">{slogan || "Eslogan"}</p>
                            <div className="absolute bottom-2 flex gap-2">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded">Botón 1</button>
                                <button className="bg-gray-500 text-white px-3 py-1 rounded">Botón 2</button>
                            </div>
                        </div>
                    )}
                    {design === "right" && (
                        <div className="w-full flex justify-between items-center p-2">
                            <div className="flex flex-col">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded mb-2">Botón 1</button>
                                <button className="bg-gray-500 text-white px-3 py-1 rounded">Botón 2</button>
                            </div>
                            <div className="text-right">
                                {logo && <img src={logo} alt="Logo" className="w-16 h-16 mb-2 ml-auto" />}
                                <p className="font-bold">{companyName || "Nombre"}</p>
                                <p className="text-sm text-gray-600">{slogan || "Eslogan"}</p>
                            </div>
                        </div>
                    )}
                    {design === "left" && (
                        <div className="w-full flex justify-between items-center p-2">
                            <div className="text-left">
                                {logo && <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />}
                                <p className="font-bold">{companyName || "Nombre"}</p>
                                <p className="text-sm text-gray-600">{slogan || "Eslogan"}</p>
                            </div>
                            <div className="flex flex-col">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded mb-2">Botón 1</button>
                                <button className="bg-gray-500 text-white px-3 py-1 rounded">Botón 2</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateStyle;
