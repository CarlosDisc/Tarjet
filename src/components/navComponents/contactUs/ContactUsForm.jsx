import React from "react";
import contactUsImage from "../../../images/contactUsImage.png";
import ButtonCustom from "../../Buttons/ButtonCustom";

const ContactUsPage = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 pt-10 pb-10">
            {/* Formulario en el div izquierdo */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 p-18">
                <h1 className="text-2xl font-bold text-[#545F71]">Contáctanos</h1>
                <form action="" className="space-y-6">
                    {/* Fila 1: Nombre y Correo Electrónico */}
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center">

                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600">Nombre</label>
                            <input 
                                id="name"
                                type="text" 
                                className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#545F71]">Correo Electrónico</label>
                            <input 
                                id="email"
                                type="email" 
                                className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
                            />
                        </div>
                    </div>
                    {/* Fila 2: Número y Ciudad */}
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <div className="w-full">
                            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#545F71]">Número</label>
                            <input 
                                id="phone"
                                type="tel" 
                                className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="city" className="block text-sm font-medium mb-2 text-[#545F71]">Ciudad</label>
                            <input 
                                id="city"
                                type="text" 
                                className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1]"
                            />
                        </div>
                    </div>
                    {/* Fila 3: Mensaje */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#545F71]">Mensaje</label>
                        <textarea 
                            id="message"
                            className="border-gray-400 shadow-lg w-full px-3 py-2 shadow-gray-400/40 rounded-lg text-gray-700 bg-[#F1F1F1] h-32"
                        ></textarea>
                    </div>
                    <div className="flex w-[150px]">
                        <ButtonCustom text="Enviar" />
                    </div>
                </form>
            </div>

            {/* Imagen en el div derecho */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={contactUsImage} alt="Contact Us" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default ContactUsPage;

