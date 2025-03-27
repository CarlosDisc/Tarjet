import React from "react";

const ColorPicker = ({ color, setColor }) => {
    return (
        <div className="mb-6 p-4 bg-white shadow-md rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                Selecciona un Color
            </h2>

            <div className="flex flex-col items-center gap-4">
                {/* Selector de color estilizado */}
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-20 h-12 rounded-lg border-2 border-gray-300 shadow-lg cursor-pointer transition hover:scale-105"
                />

                {/* Input para código hexadecimal */}
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-36 text-center focus:ring-2 focus:ring-blue-400 transition"
                    placeholder="#000000"
                />
            </div>

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

