import React from 'react';
import MenuPerfil from '../myProfilePageComponents/MenuPerfil';
import Header from '../homePageComponents/Header';
import SearchBar from '../homePageComponents/SearchBar';
import Information from '../homePageComponents/Information';
import OrganizationTarjets from './oganizationTarjets';
import PersonalTarget from './PersonalTargets';
import { useState } from 'react';


const MyCards = () => {
    const [activeTab, setActiveTab] = useState("personal");

    return(
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <div className="flex justify-center items-center py-4">
              <SearchBar />
            </div>
            <div className="flex justify-center bg-[#F1F1F1]">
                <div className="w-1/4 p-4 sticky top-0 self-start">
                    <MenuPerfil/>
                </div>
                <div className="w-3/4 flex flex-col gap-6 p-4 bg-white rounded-lg m-5 mr-10 md:mr-16 lg:mr-20"> 
                    <div className="flex justify-center  ">
                        <button
                            className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ${
                                activeTab === "personal"
                                ? "border-b-2 border-[#63C3D1] text-[#63C3D1]"
                                : "text-gray-500 hover:text-[#63C3D1]"
                            }`}
                            onClick={() => setActiveTab("personal")}>
                                Tarjetas Personales
                        </button>
                        <button
                            className={`px-6 py-2 text-lg font-medium transition-colors duration-200 ml-4 ${
                                activeTab === "organization"
                                ? "border-b-2 border-[#63C3D1] text-[#63C3D1]"
                                : "text-gray-500 hover:text-[#63C3D1]"
                            }`}
                            onClick={() => setActiveTab("organization")}>
                                Tarjetas Organización
                        </button>
                    </div>

                    {/* Contenido dinámico basado en la pestaña activa */}
                    <div className="mt-4">
                        {activeTab === "personal" ? <PersonalTarget /> : <OrganizationTarjets />}
                    </div>
                </div>
            </div>
            <div>
                <Information/>
            </div>
        </div>
    );
}
export default MyCards;