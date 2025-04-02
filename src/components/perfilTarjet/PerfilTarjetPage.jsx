import React, { useState, useEffect } from "react";
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
import icon from "../../images/icon.png";
import TarjetCompany from "../TarjetCompany";

const PerfilTarjetPage = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Mueve el scroll al inicio al cargar el componente
    }, []);

    const openingHours = {
        Lunes: "9:00 AM - 5:00 PM",
        Martes: "9:00 AM - 5:00 PM",
        Miercoles: "9:00 AM - 5:00 PM",
        Jueves: "9:00 AM - 5:00 PM",
        Viernes: "9:00 AM - 5:00 PM",
        Sabado: "Cerrado",
        Domingo: "Cerrado"
    };
    const tarjetData = [
        {
            bg: "#a8322c",
            textColor: "#0acf00",
        }
    ]

    const handleIconClick = (component) => {
        setSelectedComponent(prev => (prev === component ? null : component));
    };

    return (
        <div>
            <Header />
            <SearchBar />
            <div className="flex flex-col items-center mt-8 pb-5 relative">
                <div className="absolute top-70 left-0 right-0 flex justify-center gap-4 pt-2 z-10">
                    {[{ icon: FaShareAlt, id: "share" },
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
                                backgroundColor: selectedComponent === id ? "#fffffff" : "#e5e7eb" 
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Icon 
                                size={24}
                                style={{
                                    color: selectedComponent === id ? "#0acf00" : tarjetData[0].bg   
                                }}
                            />
                        </motion.button>
                    ))}
                </div>

                <TarjetCompany
                    bg={tarjetData[0].bg}
                    icon={icon} 
                    name="Empresa XYZ"
                    width="600px"   
                    height="350px"  
                    flipped={false} 
                    textColor={tarjetData[0].textColor}
                    iconSize = "w-40 h-40"
                />

                <AnimatePresence>
                    <motion.div
                        key={selectedComponent} // 🔹 Esto asegura que la animación se ejecute cuando el componente cambie
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex flex-col justify-center items-center mt-5 mx-auto w-auto transition-all duration-300 ease-in-out"
                    >
                        {!selectedComponent ? (
                            <TarjetCompany
                                bg={tarjetData[0].bg}
                                icon={icon} 
                                name="Empresa XYZ"
                                phone="+123456789"
                                email="empresa@correo.com"
                                website="www.empresa.com"
                                width="600px"   
                                height="350px"  
                                flipped={true}
                                textColor={tarjetData[0].textColor} 
                            />
                        ) : (
                            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-lg w-auto text-center">
                                {selectedComponent === "share" && <Share />}
                                {selectedComponent === "services" && <Services />}
                                {selectedComponent === "photos" && <Images />}
                                {selectedComponent === "video" && <Videos />}
                                {selectedComponent === "schedule" && <Schedule openingHours={openingHours} />}
                                {selectedComponent === "location" && <Location />}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="pb-5">
                <CoWorkers />
            </div>
            <Information />
        </div>
    );
};

export default PerfilTarjetPage;
