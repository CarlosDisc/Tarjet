import React, { useState } from "react";
import Header from "../homePageComponents/Header";
import ColorPicker from "./ColorPicker";
import ButtonCustom from "../Buttons/ButtonCustom";
import ButtonCustomWhite from "../Buttons/ButtonCustomWhite";
import profileDefault from "../../images/profileDefault.png"

const CreateCompanyPage = () => {
    const [nombreNegocio, setNombreNegocio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [logo, setLogo] = useState(profileDefault);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombreNegocio || !categoria || !descripcion){
            alert("Todos los campos son obligatorios");
            return;
            }
            console.log({
                nombreNegocio,
                categoria,
                descripcion,
                logo
            });
    };
    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-5">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                    <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
                        Crear perfil de empresa
                    </h1>

                    <form onSubmit={handleSubmit}>
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
                                Editar Logo
                            </label>
                        </div>
                    </div>



                        {/* Selección de color */}
                        <ColorPicker />

                        {/* Nombre de Negocio */}
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
                            <input
                                type="text"
                                id="categoria"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                className="my-input-style"
                                required
                            />
                        </div>

                        {/* Presentación o Descripción */}
                        <div className="mb-6">
                            <label htmlFor="descripcion" className="block text-lg font-semibold mb-2">Presentación o Descripción</label>
                            <textarea
                                id="descripcion"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="my-input-style"
                                rows="4"
                                required
                            />
                        </div>

                        {/* Subir Logo */}

                        {/* Botón de Guardar */}
                        <div className="flex gap-4">
                            <ButtonCustomWhite text="Omitir"/>
                            <ButtonCustom text="Guardar Perfil"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCompanyPage;
