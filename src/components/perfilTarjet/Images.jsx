import React from 'react';
import tarjet from '../../images/tarjet.png'


const Imagenes = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4"> {/* Agregamos padding para espaciar */}
            {[...Array(4)].map((_, index) => (
                <img 
                src={tarjet} 
                alt={`tarjet ${index + 1}`} 
                className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
            ))}
        </div>
    );
}

export default Imagenes;