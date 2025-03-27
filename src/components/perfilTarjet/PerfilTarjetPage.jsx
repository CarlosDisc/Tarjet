import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShareAlt, FaHandHolding, FaCamera, FaVideo, FaClock, FaMapMarkerAlt } from "react-icons/fa"; 
import Header from "../homePageComponents/Header";
import SearchBar from "../homePageComponents/SearchBar";
import Information from "../homePageComponents/Information";
import Images from "./Images";
import Services from "./Services";
import Share from "./Share";
import Schedule from "./Schedules";
import Videos from "./Videos";
import Location from "./Location";
import CoWorkers from "./CoWorkers";
import tarjet from "../../images/tarjet.png";
import tarjetBside from "../../images/tarjetBside.png";

const PerfilTarjetPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const openingHours = {
        Lunes: "9:00 AM - 5:00 PM",
        Martes: "9:00 AM - 5:00 PM",
        Miercoles: "9:00 AM - 5:00 PM",
        Jueves: "9:00 AM - 5:00 PM",
        Viernes: "9:00 AM - 5:00 PM",
        Sabado: "Cerrado",
        Domingo: "Cerrado"
    };

    const handleIconClick = (component) => {
        setSelectedComponent(prev => (prev === component ? null : component));
    };

    const renderSelectedComponent = () => {
        if (!selectedComponent) {
            return (
                <motion.div
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-4 rounded-xl shadow-lg text-center"
                >
                    <img 
                        src={tarjetBside} 
                        alt="Tarjeta Alternativa" 
                        className="w-96 md:w-[500px] lg:w-[600px] rounded-xl"
                    />
                </motion.div>
            );
        }
    
        return (
            <motion.div
                key={selectedComponent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-4 bg-gray-100 rounded-lg shadow-lg inline-block text-center w-auto"
            >
                {selectedComponent === "share" && <Share />}
                {selectedComponent === "services" && <Services />}
                {selectedComponent === "photos" && <Images />}
                {selectedComponent === "video" && <Videos />}
                {selectedComponent === "schedule" && <Schedule openingHours={openingHours} />}
                {selectedComponent === "location" && <Location />}
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
                    className="border-2 rounded-xl p-0.5 relative overflow-hidden"
                    animate={{
                        borderColor: ["#ff9999", "#99ff99", "#9999ff", "#ff99ff", "#ff9999"],
                    }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    <img 
                        src={tarjet} 
                        alt="Tarjeta" 
                        className="w-96 md:w-[500px] lg:w-[600px] rounded-xl"
                        />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-2 rounded-b-xl">
                    {[
                        { icon: FaShareAlt, id: "share" },
                        { icon: FaHandHolding, id: "services" },
                        { icon: FaCamera, id: "photos" },
                        { icon: FaVideo, id: "video" },
                        { icon: FaClock, id: "schedule" },
                        { icon: FaMapMarkerAlt, id: "location" }
                    ].map(({ icon: Icon, id }) => (
                        <motion.button
                            key={id}
                            className={`p-2 rounded-full 
                                ${selectedComponent === id ? "bg-blue-500 text-white" : "bg-gray-200"} 
                                hover:bg-blue-400 transform hover:scale-110`}
                            onClick={() => handleIconClick(id)}
                            whileTap={{ scale: 0.9 }}
                            animate={{ 
                                scale: selectedComponent === id ? 1.2 : 1, 
                                backgroundColor: selectedComponent === id ? "#3b82f6" : "#e5e7eb" 
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Icon 
                                size={24}
                                style={{
                                    color: selectedComponent === id ? "#ff7e5f" : "#2575fc"  // Cambiar entre dos colores
                                }}
                            />
                        </motion.button>
                    ))}
                    </div>
                </motion.div>

                {/* Animación de los componentes seleccionados */}
                <AnimatePresence>
                    {renderSelectedComponent() && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`flex justify-center items-center mt-5 mx-auto w-full transition-all duration-300 ease-in-out`}
                        >
                            {renderSelectedComponent()}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Imagen inferior */}
                
            </div>
            <div className="pb-5">
                <CoWorkers/>
            </div>
            <Information />
        </div>

    );
};

export default PerfilTarjetPage;
