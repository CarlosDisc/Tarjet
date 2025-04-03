import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MenuPerfil from "../myProfilePageComponents/MenuPerfil";
import Header from "../homePageComponents/Header";
import SearchBar from "../homePageComponents/SearchBar";
import Information from "../homePageComponents/Information";
import ButtonCustom from "../Buttons/ButtonCustom";
import OrganizationTarjets from "./oganizationTarjets";
import PersonalTarget from "./PersonalTargets";

const MyCards = () => {
    const [activeTab, setActiveTab] = useState("personal");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <Header />

            <div className="flex justify-center items-center py-4">
                <SearchBar />
            </div>

            <div className="flex justify-center bg-[#F1F1F1]">
                <div className="w-1/4 p-4 sticky top-0 self-start">
                    <MenuPerfil />
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mt-5 mx-2 sm:mx-5 mb-5 w-full max-w-6xl">
                    <div className="w-full flex flex-col gap-6 p-4 bg-white rounded-lg m-5 md:mr-16">
                        
                        {/* Botón para Crear Tarjeta */}
                        <div className="flex justify-center w-full mt-4">
                            <motion.div
                                whileTap={{ scale: 0.95 }}
                                className="w-1/4 flex justify-center"
                            >
                                <ButtonCustom text="Crear Tarjeta" onClick={() => navigate("/create_company")} />
                            </motion.div>
                        </div>

                        {/* Botones de navegación */}
                        <div className="flex justify-center">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ${
                                    activeTab === "personal"
                                        ? "border-b-2 border-[#63C3D1] text-[#63C3D1]"
                                        : "text-gray-500 hover:text-[#63C3D1]"
                                }`}
                                onClick={() => setActiveTab("personal")}
                            >
                                Tarjetas Personales
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ml-4 ${
                                    activeTab === "organization"
                                        ? "border-b-2 border-[#63C3D1] text-[#63C3D1]"
                                        : "text-gray-500 hover:text-[#63C3D1]"
                                }`}
                                onClick={() => setActiveTab("organization")}
                            >
                                Tarjetas Organización
                            </motion.button>
                        </div>

                        {/* Contenido con animación */}
                        <div className="mt-4">
                            <AnimatePresence mode="wait">
                                {activeTab === "personal" ? (
                                    <motion.div
                                        key="personal"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <PersonalTarget />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="organization"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <OrganizationTarjets />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <Information />
        </div>
    );
};

export default MyCards;
