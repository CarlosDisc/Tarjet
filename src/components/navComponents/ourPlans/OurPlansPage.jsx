import React from 'react';
import Header from "../../homePageComponents/Header";
import Information from "../../homePageComponents/Information";
import homePage from "../../../images/homePage.jpg";
import NamePlan from "./NamePlan";
import TarjetPlan from "./TarjetPlan";

const plans = [
    {
        price: 100,
        name: "Plan Básico",
        features: [
            "Acceso a plantillas",
            "Soporte técnico",
            "Actualizaciones automáticas",
            "Acceso limitado a herramientas",
        ],
    },
    {
        price: 200,
        name: "Plan Pro",
        features: [
            "Acceso a todas las plantillas",
            "Soporte técnico prioritario",
            "Actualizaciones premium",
            "Acceso total a herramientas",
        ],
    },
    {
        price: 300,
        name: "Plan Empresarial",
        features: [
            "Soporte dedicado 24/7",
            "Múltiples cuentas de usuario",
            "Acceso a herramientas avanzadas",
            "Personalización exclusiva",
        ],
    },
];

const OurPlansPage = () => {
    return (
        <div>
            <Header/>
                <div className="relative h-[500px] flex items-center justify-center pb-0">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${homePage})` }}
                                    />
                    <div className="absolute inset-0 bg-white opacity-60"></div>
                            <div className="absolute bottom-10 left-10 z-10">
                            <h1 className="text-white text-3xl font-bold drop-shadow-lg">
                                NUESTROS PLANES
                            </h1>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 pb-10 bg-[#F5F5F5] pt-10">
                    {plans.map((plan, index) => (
                        <TarjetPlan key={index} price={plan.price} name={plan.name} features={plan.features} />
                    ))}
                </div>
                <div className="bg-[#F5F5F5] pt-10 pb-10 rounded-lg space-y-10">
                    {plans.map((plan, index) => (
                        <NamePlan
                            key={index}
                            plan={plan}
                            />
                    ))}
                </div>
            <Information/>
        </div>
    );
};
export default OurPlansPage;