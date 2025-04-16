import React, { useState } from "react";
import ColorPalette from "./ColorPalette";
import ButtonCustom from "../Buttons/ButtonCustom";
import ButtonCustomWhite from "../Buttons/ButtonCustomWhite";
import CardPreview from "./CardPreview";
import SelectFont from "./SelectFont";
import profileDefault from "../../images/profileDefault.png";

const CustomStyle = () => {
  const [nombreNegocio, setNombreNegocio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [slogan, setSlogan] = useState("");
  const [logo, setLogo] = useState(profileDefault);
  const [colorFondo, setColorFondo] = useState("#cf82cf");
  const [colorTexto, setColorTexto] = useState("#000000");
  const [posicion, setPosicion] = useState(1); // 🆕 nuevo estado
  const [fontFamily, setFontFamily] = useState("Arial");

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

    if (!nombreNegocio || !categoria || !slogan) {
      alert("Todos los campos son obligatorios");
      return;
    }
  };

  return (
    <div className="bg-[#6b728040]">
      <form onSubmit={handleSubmit}>
        {/* LOGO */}
        <div className="mb-6 pt-6">
          <h2 className="text-lg font-semibold mb-2 text-center">Logo</h2>
          <div className="flex justify-center">
            <div className="flex items-center gap-20">
              {logo && (
                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt="Logo Preview"
                    className="w-24 h-24 object-cover rounded-lg shadow"
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                id="logo-input"
                className="hidden"
              />
              <label
                htmlFor="logo-input"
                className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Subir Logo
              </label>
            </div>
          </div>
        </div>

        {/* FORM CAMPOS */}
        <div className="w-200 mx-auto">
          <div className="mb-6">
            <label htmlFor="nombreNegocio" className="block text-lg font-semibold mb-2">
              Nombre de Negocio
            </label>
            <input
              type="text"
              placeholder="Nombre de tu negocio"
              id="nombreNegocio"
              value={nombreNegocio}
              onChange={(e) => setNombreNegocio(e.target.value)}
              className="my-input-style"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="categoria" className="block text-lg font-semibold mb-2">
              Categoría
            </label>
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
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="descripcion" className="block text-lg font-semibold mb-2">
              Presentación o Eslogan
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

          <div className="mb-6">
            <SelectFont selectedFont={fontFamily} onChangeFont={setFontFamily} />
          </div>
        </div>



        {/* COLORES */}
        <div className="mb-6 rounded-xl flex flex-col items-center">
          <h2 className="block text-lg font-semibold mb-2">
            Personaliza tu Tarjeta
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <ColorPalette
              label="Color de Fondo"
              initialColor={colorFondo}
              onColorChange={setColorFondo}
            />

            <ColorPalette
              label="Color de Fuente"
              initialColor={colorTexto}
              onColorChange={setColorTexto}
            />
          </div>
        </div>


        {/* BOTONES DE DISEÑO */}
        <div className="flex justify-center gap-4 my-6">
          <button
            type="button"
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${posicion === 1 ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              }`}
            onClick={() => setPosicion(1)}
          >
            Diseño 1
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${posicion === 2 ? "bg-green-700" : "bg-green-500 hover:bg-green-600"
              }`}
            onClick={() => setPosicion(2)}
          >
            Diseño 2
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${posicion === 3 ? "bg-purple-700" : "bg-purple-500 hover:bg-purple-600"
              }`}
            onClick={() => setPosicion(3)}
          >
            Diseño 3
          </button>
        </div>

        {/* PREVIEW */}
        <CardPreview
          nombreNegocio={nombreNegocio}
          slogan={slogan}
          logo={logo}
          modo="custom"
          colorFondo={colorFondo}
          colorTexto={colorTexto}
          posicion={posicion}
          fontFamily={fontFamily}
        />

        {/* BOTONES FINALES */}
        <div className="w-200 mx-auto p-6">
          <div className="flex justify-center gap-4 mt-6">
            <ButtonCustomWhite text="Omitir" />
            <ButtonCustom text="Guardar Perfil" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomStyle;
