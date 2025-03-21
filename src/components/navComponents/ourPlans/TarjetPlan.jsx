import React from 'react';
import logo from "../../../images/logo.jpg";
import arrow_tarjet_plan  from "../../../assets/arrow_tarjet_plan.png";
import ButtonCustom from '../../Buttons/ButtonCustom';

const TarjetPlan = ({price, name, features}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-[#545F71] 
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl space-y-6">

            {/* Logo en la esquina superior izquierda */}
            <div className="w-15 h-10">
                <img src={logo} alt="Logo" className="w-full h-full" />
            </div>

            {/* Precio del plan */}
            <h2 className="text-3xl font-bold mt-2">Bs. {price}</h2>
            <p className="text-sm text-gray-500">/ Mensual</p>

            {/* Nombre del plan */}
            <h3 className="font-bold mt-2">{name}</h3>

            {/* Lista de características */}
            <ul className="mt-2 space-y-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <img src={arrow_tarjet_plan} alt="Arrow" className="w-4 h-4 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Botón */}
            <div className="mt-4">
                <ButtonCustom text="Elegir plan" />
            </div>
        </div>
    );
}
export default TarjetPlan;