import React from "react";

const Location = () => {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7283915258845!2d-63.17362828538597!3d-17.783313098612714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e77fda1a2e8f%3A0x75c6f62c4e9dd3b7!2sSanta%20Cruz%20de%20la%20Sierra%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1629835645732!5m2!1ses!2sbo";

    const images = [
        "https://source.unsplash.com/400x300/?city",  // Imagen aleatoria de ciudad
        "https://source.unsplash.com/400x300/?building",
        "https://source.unsplash.com/400x300/?street",
    ];

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h2>

            {/* Mapa de Google */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mb-6">
                <iframe
                    src={googleMapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Descripción */}
            <p className="text-gray-700 text-lg text-center mb-4">
                Nos encontramos en el corazón de Santa Cruz de la Sierra, un lugar accesible con múltiples opciones de transporte y cerca de varios puntos de interés.
            </p>

            {/* Galería de imágenes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Ubicación ${index + 1}`} 
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default Location;
