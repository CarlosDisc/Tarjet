import React from 'react';
import tarjet from '../../images/tarjet.png'


const Imagenes = ({bg}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-700">LO QUE HACEMOS</h1>
            <div className="grid grid-cols-2 gap-4 p-4"
            style={{ backgroundColor: bg }}> {/* Agregamos padding para espaciar */}
                {[...Array(4)].map((_, index) => (
                    <img 
                    src={tarjet} 
                    alt={`tarjet ${index + 1}`} 
                    className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                />
                ))}
            </div>
        </div>
    );
}

export default Imagenes;