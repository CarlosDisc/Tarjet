import React from 'react'; 
import tarjet from '../../images/tarjet.png';

const servicesData = [
    { 
        title: "Desarrollo Web", 
        subservices: [
            "Creación de sitios responsivos",
            "E-commerce y tiendas online",
            "Optimización SEO",
            "Mantenimiento de páginas web"
        ]
    },
    { 
        title: "Marketing Digital", 
        subservices: [
            "Gestión de redes sociales",
            "Campañas de anuncios",
            "Email marketing",
            "Análisis de métricas"
        ]
    },
    { 
        title: "Seguridad Informática", 
        subservices: [
            "Auditorías de seguridad",
            "Pruebas de penetración",
            "Monitoreo de redes",
            "Protección de datos"
        ]
    },
    { 
        title: "Soporte Técnico", 
        subservices: [
            "Mantenimiento de equipos",
            "Instalación de software",
            "Gestión de servidores",
            "Respaldo y recuperación de datos"
        ]
    }
];

const Services = ({bg}) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-700">NUESTROS SERVICIOS</h1>
            <div className="mt-8 py-4 px-2 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 max-w-7xl mx-auto rounded-lg"
                    style={{ backgroundColor: bg }}>
                {servicesData.map((service, index) => (
                    <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center justify-start gap-6 p-6 bg-white shadow-md rounded-xl w-full max-w-full"
                    >
                    {/* Imagen del servicio */}
                    <img
                        src={tarjet}
                        alt={`Servicio ${index + 1}`}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover"
                    />

                    {/* Contenido del servicio */}
                    <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                        <ul className="pl-5 mt-2 text-gray-600 list-disc">
                        {service.subservices.map((sub, subIndex) => (
                            <li key={subIndex} className="text-base">{sub}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;


