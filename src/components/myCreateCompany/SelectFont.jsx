import React from 'react';

const fonts = [
    'Arial',
    'Georgia',
    'Times New Roman',
    'Courier New',
    'Verdana',
    'Roboto',
    'Open Sans',
    'Montserrat',
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Raleway',
    'Poppins',
    'Merriweather',
    'Oswald',
    'Nunito',
    'Ubuntu',
    'Quicksand',
    'Playfair Display',
    'Rubik'
];

const SelectFont = ({ selectedFont, onChangeFont }) => {
    return (
        <div className="mb-6">
            <label htmlFor="fuente" className="block text-lg font-semibold mb-2">Seleccionar Fuente</label>
            <select
                id="fuente"
                value={selectedFont}
                onChange={(e) => onChangeFont(e.target.value)}
                className="my-input-style"
            >
                {fonts.map((font) => (
                    <option key={font} value={font} style={{ fontFamily: font }}>
                        {font}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectFont;
