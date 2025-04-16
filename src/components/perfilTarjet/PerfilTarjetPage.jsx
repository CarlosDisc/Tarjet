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
        Lunes: "9:00 AM - 5:00 PM", // Horario continuo
        Martes: { mañana: "9:00 AM - 12:00 PM", tarde: "2:00 PM - 5:00 PM" }, // Horario dividido
        Miercoles: "9:00 AM - 5:00 PM",
        Jueves: { mañana: "9:00 AM - 12:00 PM", tarde: "2:00 PM - 5:00 PM" },
        Viernes: "9:00 AM - 5:00 PM",
        Sabado: "Cerrado",
        Domingo: "Cerrado"
    };
    const tarjetData = [
        {
            bg: "#00cfad",
            textColor: "#0d00ff",
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
                            className={`p-2 rounded-full shadow-lg transition-all duration-300 ${selectedComponent === id ? "bg-gradient-to-r from-[#0a0f1c] via-[#1e3a5f] to-[#3b1d38]" : "bg-gradient-to-r from-[#0a0f1c] via-[#1e3a5f] to-[#3b1d38]"
                                }`}
                            onClick={() => handleIconClick(id)}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: selectedComponent === id ? 1.2 : 1 }}
                        >
                            <div
                                className={`w-6 h-6 flex items-center justify-center ${selectedComponent === id
                                        ? "text-white bg-gradient-to-r from-[#0a0f1c] via-[#1e3a5f] to-[#3b1d38] bg-clip-text"
                                        : "text-white"
                                    }`}
                            >
                                <Icon size={24} />
                            </div>
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
                    iconSize="w-40 h-40"
                />

                <AnimatePresence>
                    {selectedComponent && (
                        <motion.div
                            key={selectedComponent}
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col justify-center items-center mt-5 mx-auto w-auto transition-all duration-300 ease-in-out"
                        >
                            <div className="mt-4 pl-4 pr-4 w-auto text-center ">
                                {selectedComponent === "share" && <Share bg={tarjetData[0].bg} />}
                                {selectedComponent === "services" && <Services bg={tarjetData[0].bg} />}
                                {selectedComponent === "photos" && <Images bg={tarjetData[0].bg} />}
                                {selectedComponent === "video" && <Videos bg={tarjetData[0].bg} />}
                                {selectedComponent === "schedule" && <Schedule openingHours={openingHours} bg={tarjetData[0].bg} />}
                                {selectedComponent === "location" && <Location bg={tarjetData[0].bg} />}

                            </div>
                        </motion.div>
                    )}
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
