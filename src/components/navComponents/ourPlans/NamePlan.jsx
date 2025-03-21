import React from "react";
import OurPlansPage from "../../../images/ourPlansImage.png";
import ButtonCustom from "../../Buttons/ButtonCustom";

const NamePlan = ({ plan }) => {
    return (
        
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 space-y-16 p-6 shadow-lg bg-white rounded-lg">
                {/* Sección Izquierda - Información del Plan */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-10">
                    <h1 className="text-2xl font-bold text-[#545F71] text-center">{plan.name}</h1>
                    <ul className="mt-4 space-y-2 text-gray-700 mx-auto">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="text-[#545F71] text-left">- {feature}</li>
                        ))}
                    </ul>
    
                    <div className="flex w-[150px]">
                        <ButtonCustom text="Elegir plan" />
                    </div>
                </div>
    
                {/* Sección Derecha - Imagen */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={OurPlansPage} alt="Plan Imagen" className="w-64 h-64 object-cover" />
                </div>
            </div>
        
    );
    
};

export default NamePlan;
