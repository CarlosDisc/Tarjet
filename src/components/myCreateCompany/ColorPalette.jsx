import React, { useEffect, useRef } from "react";
import iro from "@jaames/iro";

const ColorPalette = ({ label, initialColor, onColorChange }) => {
    const pickerRef = useRef(null);
    const pickerInstance = useRef(null);

    useEffect(() => {
        if (!pickerInstance.current) {
            pickerInstance.current = new iro.ColorPicker(pickerRef.current, {
                width: 150,
                color: initialColor,
                borderWidth: 1,
                borderColor: "#ccc",
            });

            pickerInstance.current.on("color:change", (c) => {
                onColorChange(c.hexString);
            });
        }
    }, []);

    useEffect(() => {
        if (pickerInstance.current) {
            pickerInstance.current.color.set(initialColor);
        }
    }, [initialColor]);

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{label}</h3>
            <div ref={pickerRef} className="mb-4"></div>
            <input
                type="text"
                value={initialColor}
                onChange={(e) => {
                    const newColor = e.target.value;
                    onColorChange(newColor);
                    pickerInstance.current.color.set(newColor);
                }}
                className="border-2 border-gray-400 rounded-lg shadow-gray-400/40 px-3 py-2 text-lg text-gray-700 w-36 text-center transition bg-[#F1F1F1]"
                placeholder="#000000"
            />
        </div>
    );
};

export default ColorPalette;
