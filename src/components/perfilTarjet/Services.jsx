import React from 'react'; 
import tarjet from '../../images/tarjet.png';

const servicesData = [
    { title: "Servicio 1", description: "Descripción breve del servicio 1." },
    { title: "Servicio 2", description: "Descripción breve del servicio 2." },
    { title: "Servicio 3", description: "Descripción breve del servicio 3." },
    { title: "Servicio 4", description: "Descripción breve del servicio 4." }
];

const Services = () => {
    return (
        <div className="mt-8 grid gap-6 w-full max-w-3xl mx-auto">
            {servicesData.map((service, index) => (
                <div key={index} className="flex items-center justify-start gap-8 p-6 bg-white shadow-md rounded-lg">
                    {/* Imagen más grande */}
                    <img 
                        src={tarjet} 
                        alt={`Servicio ${index + 1}`} 
                        className="w-56 h-56 rounded-lg object-cover"  // Tamaño incrementado
                    />
                    {/* Contenido del servicio a la derecha */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold">{service.title}</h3> {/* Fuente más grande */}
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;

