import React from "react";

// Datos de ejemplo para los colaboradores
const collaborators = [
    { name: "Juan Pérez", role: "Desarrollador", image: "path_to_image_juan" },
    { name: "Ana Gómez", role: "Diseñadora", image: "path_to_image_ana" },
    { name: "Carlos Sánchez", role: "Product Manager", image: "path_to_image_carlos" },
    { name: "Lucía Torres", role: "QA", image: "path_to_image_lucia" }
];

const CoWorkers = () => {
    return (
        <div className="flex flex-wrap justify-center  gap-6">
            {collaborators.map((collaborator, index) => (
                <div key={index} className="w-60 p-4 rounded-xl bg-gray-100 shadow-xl text-center">
                    <img
                        src={collaborator.image}
                        alt={collaborator.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">{collaborator.name}</h3>
                    <p className="text-sm text-gray-500">{collaborator.role}</p>
                </div>
            ))}
        </div>
    );
};

export default CoWorkers;
