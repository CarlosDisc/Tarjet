import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShareAlt, FaHandHolding, FaCamera, FaVideo, FaClock, FaMapMarkerAlt } from "react-icons/fa"; 
import Header from "../homePageComponents/Header";
import SearchBar from "../homePageComponents/SearchBar";
import Information from "../homePageComponents/Information";
import tarjet from "../../images/tarjet.png";
import tarjetBside from "../../images/tarjetBside.png";

const PerfilTarjetPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    // Función para manejar el clic en los iconos
    const handleIconClick = (component) => {
        setSelectedComponent(prev => (prev === component ? null : component));
    };

    // Componente con animación de deslizamiento
    const renderSelectedComponent = () => {
        if (!selectedComponent) return null;

        return (
            <motion.div
                key={selectedComponent}
                initial={{ opacity: 0, y: 10 }} // Comienza desplazado hacia abajo
                animate={{ opacity: 1, y: 0 }}   // Desliza hacia su posición original
                exit={{ opacity: 0, y: 10 }}     // Desliza hacia abajo al desaparecer
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-4 bg-gray-100 rounded-lg shadow-lg w-full max-w-md text-center"
            >
                {selectedComponent === "share" && "Opción para Compartir"}
                {selectedComponent === "services" && "Opción de Servicios"}
                {selectedComponent === "photos" && "Galería de Fotos"}
                {selectedComponent === "video" && "Sección de Videos"}
                {selectedComponent === "schedule" && "Horario de Atención"}
                {selectedComponent === "location" && "Ubicación en el mapa"}
            </motion.div>
        );
    };

    return (
        <div>
            <Header />
            <SearchBar />
            <div className="flex flex-col items-center mt-8 pb-5">
                {/* Imagen superior con borde RGB más ligero */}
                <motion.div
                    className="border-2 rounded-xl p-1"
                    animate={{
                        borderColor: ["#ff9999", "#99ff99", "#9999ff", "#ff99ff", "#ff9999"],
                    }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    <img src={tarjet} alt="Tarjeta" className="w-96 md:w-[500px] lg:w-[600px] rounded-xl" />
                </motion.div>

                {/* Contenedor de iconos con animación más fluida */}
                <div className="flex justify-center gap-4 my-4">
                    {[
                        { icon: <FaShareAlt size={24} />, id: "share" },
                        { icon: <FaHandHolding size={24} />, id: "services" },
                        { icon: <FaCamera size={24} />, id: "photos" },
                        { icon: <FaVideo size={24} />, id: "video" },
                        { icon: <FaClock size={24} />, id: "schedule" },
                        { icon: <FaMapMarkerAlt size={24} />, id: "location" }
                    ].map(({ icon, id }) => (
                        <motion.button
                            key={id}
                            className={`p-2 rounded-full ${
                                selectedComponent === id ? "bg-blue-500 text-white" : "bg-gray-200"
                            }`}
                            onClick={() => handleIconClick(id)}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: selectedComponent === id ? 1.2 : 1, backgroundColor: selectedComponent === id ? "#3b82f6" : "#e5e7eb" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {icon}
                        </motion.button>
                    ))}
                </div>

                {/* Animación de los componentes seleccionados */}
                <AnimatePresence>
                    {selectedComponent && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}  // Comienza desplazado hacia abajo
                            animate={{ opacity: 1, y: 0 }}    // Se desliza hacia su posición original
                            exit={{ opacity: 0, y: -10 }}     // Desliza hacia arriba al desaparecer
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {renderSelectedComponent()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Imagen inferior */}
                <motion.div
                    className="border-2 rounded-xl mt-6"
                    animate={{
                        borderColor: ["#ff9999", "#99ff99", "#9999ff", "#ff99ff", "#ff9999"],
                    }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    <img src={tarjetBside} alt="Tarjeta" className="w-96 md:w-[500px] lg:w-[600px] rounded-xl" />
                </motion.div>
            </div>
            <Information />
        </div>
    );
};

export default PerfilTarjetPage;
