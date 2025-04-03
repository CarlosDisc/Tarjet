import React, { useState } from "react";
import Header from "../homePageComponents/Header";

import CustomStyle from "./CustomStyle";
import TemplateStyle from "./TemplateStyle";

const CreateCompanyPage = () => {
    
    
    const [activeTab, setActiveTab] = useState("personal");

    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-5">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
                    <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
                        Crear Tarjeta
                    </h1>
                    <div className="flex justify-center">
                            <button
                                className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ${
                                    activeTab === "personal"
                                    ? "border-b-2 border-[#63C3D1] text-[#63C3D1]"
                                    : "text-gray-500 hover:text-[#63C3D1]"
                                }`}
                                onClick={() => setActiveTab("personal")}>
                                Define tu Estilo
                            </button>
                            <button
                                className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ml-4 ${
                                    activeTab === "organization"
                                    ? "border-b-2 border-[#63C3D1] text-[#63C3D1]"
                                    : "text-gray-500 hover:text-[#63C3D1]"
                                }`}
                                onClick={() => setActiveTab("organization")}>
                                Elige un Diseño
                            </button>
                        </div>
                        <div className="mt-4">
                            {activeTab === "personal" ? <CustomStyle /> : <TemplateStyle />}
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CreateCompanyPage;
