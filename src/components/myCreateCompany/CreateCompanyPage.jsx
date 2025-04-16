import React, { useState } from "react";
import Header from "../homePageComponents/Header";
import { motion, AnimatePresence } from "framer-motion";

import CustomStyle from "./CustomStyle";
import TemplateStyle from "./TemplateStyle";

const CreateCompanyPage = () => {

    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-5">
                <div className="bg-[linear-gradient(to_right,#ffffff,#fff5f7,#ffe9f0,#ffffff)]
                                shadow-lg rounded-lg p-6 w-full ">
                    <h1 className="text-2xl font-bold text-black text-center mb-6">
                        Crear Tarjeta
                    </h1>
                    <div className="flex justify-center">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ${activeTab === "personal"
                                ? "border-b-2 border-[#1a1a1a] text-[#1a1a1a]"
                                : "text-gray-500 hover:text-[#1a1a1a]"
                                }`}
                            onClick={() => setActiveTab("personal")}
                        >
                            Define tu estilo
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ml-4 ${activeTab === "organization"
                                ? "border-b-2 border-[#1a1a1a] text-[#1a1a1a]"
                                : "text-gray-500 hover:text-[#1a1a1a]"
                                }`}
                            onClick={() => setActiveTab("organization")}
                        >
                            Elige un diseño
                        </motion.button>
                    </div>
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
                                    <CustomStyle />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="organization"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TemplateStyle />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCompanyPage;
