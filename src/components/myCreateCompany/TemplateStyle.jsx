import React, { useState } from "react";
import profileDefault from "../../images/profileDefault.png"

const TemplateStyle = () => {
    const [nombreNegocio, setNombreNegocio] = useState("");
    const [categoria, setCategoria] = useState("");
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
        <div className=" bg-white shadow-md rounded-xl flex flex-col items-center w-full">
            {/* Subida de Logo */}
            <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2 text-center">Logo</h2>

                    {/* Contenedor centrado */}
                    <div className="flex justify-center">
                        {/* Contenedor con flex para imagen y botón, con espacio entre ellos */}
                        <div className="flex items-center gap-20">
                            {/* Imagen de vista previa */}
                            {logo && (
                                <div className="flex justify-center">
                                    <img
                                        src={logo}
                                        alt="Logo Preview"
                                        className="w-24 h-24 object-cover rounded-lg shadow"
                                    />
                                </div>
                            )}

                            {/* Input de archivo oculto */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                id="logo-input"
                                className="hidden"
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
                </div>
                
                {/* Nombre de Negocio */}
                <div className="w-100 mx-auto  p-6">
                    <div className="mb-6">
                        <label htmlFor="nombreNegocio" className="block text-lg font-semibold mb-2">Nombre de Negocio</label>
                        <input
                            type="text"
                            id="nombreNegocio"
                            value={nombreNegocio}
                            onChange={(e) => setNombreNegocio(e.target.value)}
                            className="my-input-style"
                            required
                        />
                    </div>

                    {/* Categoría */}
                    <div className="mb-6">
                        <label htmlFor="categoria" className="block text-lg font-semibold mb-2">Categoría</label>
                        <select
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            className="my-input-style"
                            required
                        >
                            <option value="">Selecciona una categoría</option>
                            <option value="comida">Comida</option>
                            <option value="accesorios">Accesorios</option>
                            <option value="juguetes">Juguetes</option>
                            <option value="salud">Salud</option>
                            {/* Agrega más categorías según necesites */}
                        </select>
                    </div>


                    {/* Eslogan */}
                    <div className="mb-6">
                    <label htmlFor="descripcion" className="block text-lg font-semibold mb-2">
                        Presentación o Descripción
                    </label>
                    <input
                        type="text"
                        id="descripcion"
                        value={slogan}
                        onChange={(e) => setSlogan(e.target.value)}
                        className="my-input-style"
                        required
                    />
                    </div>
                </div>
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
                            <p className="font-bold">{nombreNegocio || "Nombre"}</p>
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
                                <p className="font-bold">{nombreNegocio || "Nombre"}</p>
                                <p className="text-sm text-gray-600">{slogan || "Eslogan"}</p>
                            </div>
                        </div>
                    )}
                    {design === "left" && (
                        <div className="w-full flex justify-between items-center p-2">
                            <div className="text-left">
                                {logo && <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />}
                                <p className="font-bold">{nombreNegocio || "Nombre"}</p>
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
