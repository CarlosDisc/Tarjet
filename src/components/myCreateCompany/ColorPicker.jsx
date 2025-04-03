import React, { useEffect, useRef, useState } from "react";
import iro from "@jaames/iro";

const ColorPicker = () => {
    const [bgColor, setBgColor] = useState("#cf82cf"); // Color de fondo
    const [fontColor, setFontColor] = useState("#000000"); // Color de la fuente

    const colorPickerRefBg = useRef(null);
    const colorPickerRefFont = useRef(null);
    const colorPickerInstanceBg = useRef(null);
    const colorPickerInstanceFont = useRef(null);

    useEffect(() => {
        if (!colorPickerInstanceBg.current) {
            // Paleta de colores para el fondo
            colorPickerInstanceBg.current = new iro.ColorPicker(colorPickerRefBg.current, {
                width: 200,
                color: bgColor,
                borderWidth: 1,
                borderColor: "#ccc",
            });

            colorPickerInstanceBg.current.on("color:change", (c) => setBgColor(c.hexString));
        }

        if (!colorPickerInstanceFont.current) {
            // Paleta de colores para la fuente
            colorPickerInstanceFont.current = new iro.ColorPicker(colorPickerRefFont.current, {
                width: 200,
                color: fontColor,
                borderWidth: 1,
                borderColor: "#ccc",
            });

            colorPickerInstanceFont.current.on("color:change", (c) => setFontColor(c.hexString));
        }
    }, []);

    return (
        <div className="mb-6 p-6 bg-white shadow-md rounded-xl flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                Personaliza tu Tarjeta
            </h2>

            <div className="flex gap-30">
                {/* Selección de color de fondo */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Color de Fondo</h3>
                    <div ref={colorPickerRefBg} className="mb-4"></div>
                    <input
                        type="text"
                        value={bgColor}
                        onChange={(e) => {
                            setBgColor(e.target.value);
                            colorPickerInstanceBg.current.color.set(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-36 text-center focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="#000000"
                    />
                </div>

                {/* Selección de color de fuente */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Color de Fuente</h3>
                    <div ref={colorPickerRefFont} className="mb-4"></div>
                    <input
                        type="text"
                        value={fontColor}
                        onChange={(e) => {
                            setFontColor(e.target.value);
                            colorPickerInstanceFont.current.color.set(e.target.value);
                        }}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-36 text-center focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="#000000"
                    />
                </div>
            </div>

            {/* Vista previa en un solo bloque */}
            <div 
                className="mt-6 w-full h-20 rounded-lg flex items-center justify-center font-bold shadow-md transition"
                style={{
                    backgroundColor: bgColor,
                    color: fontColor,
                    boxShadow: `0px 4px 10px ${bgColor}80`,
                }}
            >
                <p className="drop-shadow-lg text-lg">Tarjeta de muestra</p>
            </div>
        </div>
    );
};

export default ColorPicker;
