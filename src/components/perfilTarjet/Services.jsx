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

const Services = () => {
    return (
        <div className="mt-8 grid gap-6 w-full max-w-3xl mx-auto">
            {servicesData.map((service, index) => (
                <div key={index} className="flex items-center justify-start gap-8 p-6 bg-white shadow-md rounded-lg">
                    {/* Imagen del servicio */}
                    <img 
                        src={tarjet} 
                        alt={`Servicio ${index + 1}`} 
                        className="w-40 h-40 rounded-lg object-cover"  
                    />
                    
                    {/* Contenido del servicio */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                        <ul className=" pl-5 mt-2 text-gray-600">
                            {service.subservices.map((sub, subIndex) => (
                                <li key={subIndex} className="text-lg">{sub}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;


