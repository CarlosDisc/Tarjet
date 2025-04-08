import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import ButtonCustom from "../Buttons/ButtonCustom";
import ButtonCustomWhite from "../Buttons/ButtonCustomWhite";
import profileDefault from "../../images/profileDefault.png"


const CustomStyle = () => {
    const [nombreNegocio, setNombreNegocio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [slogan, setSlogan] = useState("");
    const [logo, setLogo] = useState(profileDefault);

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
            <form onSubmit={handleSubmit}>
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
                        {/* Selección de color */}
                        <ColorPicker />
                        {/* Botón de Guardar */}
                        <div className="flex gap-4">
                            <ButtonCustomWhite text="Omitir"/>
                            <ButtonCustom text="Guardar Perfil"/>
                        </div>
                    </form>
        </div>
    );
}
export default CustomStyle;