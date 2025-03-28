import React, { useEffect, useRef, useState } from "react";
import iro from "@jaames/iro";

const ColorPicker = () => {
    const [color, setColor] = useState("#cf82cf");
    const colorPickerRef = useRef(null);
    const colorPickerInstance = useRef(null);

    useEffect(() => {
        if (!colorPickerInstance.current) {
            colorPickerInstance.current = new iro.ColorPicker(colorPickerRef.current, {
                width: 200,
                color: color,
                borderWidth: 1,
                borderColor: "#ccc",
            });

            // Cuando cambia el color en la paleta, actualizar el estado
            colorPickerInstance.current.on("color:change", (c) => {
                setColor(c.hexString);
            });
        }
    }, []);

    // Cuando el usuario escribe un color en el input, actualizar la paleta
    const handleInputChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);

        // Si el color es válido, actualizar la paleta
        if (/^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
            colorPickerInstance.current.color.set(newColor);
        }
    };

    return (
        <div className="mb-6 p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                Selecciona un Color
            </h2>

            {/* Contenedor para la paleta de colores */}
            <div ref={colorPickerRef} className="mb-4"></div>

            {/* Input de texto para código hexadecimal */}
            <input
                type="text"
                value={color}
                onChange={handleInputChange}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-36 text-center focus:ring-2 focus:ring-blue-400 transition"
                placeholder="#000000"
            />

            {/* Vista previa del color seleccionado */}
            <div 
                className="mt-4 w-full h-14 rounded-lg flex items-center justify-center text-white font-bold shadow-md transition"
                style={{
                    backgroundColor: color,
                    boxShadow: `0px 4px 10px ${color}80`,
                }}
            >
                <p className="drop-shadow-lg">Color de muestra</p>
            </div>
        </div>
    );
};

export default ColorPicker;
