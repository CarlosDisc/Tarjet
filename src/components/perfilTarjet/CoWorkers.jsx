import React, { useState } from "react";
import Tarjet from "../Tarjet";
import icon from "../../images/icon.png";
import profileIcon from "../../images/profileDefault.png";

// Datos de los colaboradores
const collaborators = [
    { name: "Juan Pérez", role: "Desarrollador", bg: "#8A2BE2", redirectTo: "/perfil_juan" },
    { name: "Ana Gómez", role: "Diseñadora", bg: "#FF5733", redirectTo: "/perfil_ana" },
    { name: "Carlos Sánchez", role: "Product Manager", bg: "#4A90E2", redirectTo: "/perfil_carlos" },
    { name: "Lucía Torres", role: "QA", bg: "#9B59B6", redirectTo: "/perfil_lucia" }
];

const CoWorkers = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    return (
        <div className="flex flex-col items-center gap-6 mb-15">
            <h1 className="text-2xl font-bold text-gray-700">COLABORADORES</h1>

            <div className="flex flex-wrap justify-center gap-6">
                {collaborators.map((collaborator, index) => (
                    <div
                        key={index}
                        className="relative w-[250px] h-[150px] cursor-pointer"
                        onMouseEnter={() => setFlippedIndex(index)}
                        onMouseLeave={() => setFlippedIndex(null)}
                        style={{ perspective: "1000px" }} // Perspectiva para el efecto 3D
                    >
                        <Tarjet
                            bg={collaborator.bg}
                            icon={icon}
                            altIcon={profileIcon} // Icono del lado B
                            redirectTo={collaborator.redirectTo}
                            name={collaborator.name}
                            role={collaborator.role}
                            flipped={flippedIndex === index} // Controla la rotación
                            width="250px"
                            height="150px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoWorkers;


