import React from "react";

const CardPreview = ({
    nombreNegocio,
    slogan,
    logo,
    modo, // "custom" | "template"
    colorFondo,
    colorTexto,
    posicion = 1,
    imagenFondo, // NUEVA PROP
    fontFamily, // NUEVA PROP
}) => {
    const customStyles =
        modo === "custom"
            ? {
                backgroundColor: colorFondo,
                color: colorTexto,
            }
            : modo === "template" && imagenFondo
                ? {
                    backgroundImage: `url(${imagenFondo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: colorTexto, // Estilo por defecto sobre imagen
                }
                : {};

    const Botonera = ({ vertical = false }) => (
        <div
            className={`flex ${vertical ? "flex-col space-y-2" : "flex-row space-x-2"} mt-4`}
        >
            <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                1
            </button>
            <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                2
            </button>
            <button className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                3
            </button>
        </div>
    );

    const renderContenido = () => {
        switch (posicion) {
            case 1:
                return (
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
                        <h2 className="text-xl font-bold" style={{ color: colorTexto, fontFamily }}>{nombreNegocio}</h2>
                        <p className="text-sm" style={{ color: colorTexto, fontFamily }}>{slogan}</p>
                        <Botonera />
                    </div>
                );

            case 2:
                return (
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col space-y-4 text-left w-3/4">
                            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
                            <h2 className="text-xl font-bold" style={{ color: colorTexto, fontFamily }}>{nombreNegocio}</h2>
                            <p className="text-sm" style={{ color: colorTexto, fontFamily }}>{slogan}</p>
                        </div>
                        <div>
                            <Botonera vertical />
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="flex items-center justify-between w-full">
                        <div className="w-1/4">
                            <Botonera vertical />
                        </div>
                        <div className="flex flex-col space-y-4 text-right w-3/4">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-16 h-16 object-contain ml-auto"
                            />
                            <h2 className="text-xl font-bold" style={{ color: colorTexto, fontFamily }}>{nombreNegocio}</h2>
                            <p className="text-sm" style={{ color: colorTexto, fontFamily }}>{slogan}</p>
                        </div>
                    </div>
                );

            default:
                return <p className="text-red-500">Posición inválida</p>;
        }
    };

    return (
        <div
            className="p-4 rounded-xl shadow-md h-48 w-90 max-w-md mx-auto bg-gray-100 bg-opacity-80"
            style={customStyles}
        >
            {renderContenido()}
        </div>
    );
};

export default CardPreview;
