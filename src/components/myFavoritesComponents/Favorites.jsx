import React, { useState, useEffect} from "react";
import Tarjet from "../Tarjet";
import TarjetaEjemp1 from '../../images/TarjetaEjem1.png';
import icon from "../../images/icon.png";
import TarjetCompany from "../TarjetCompany";

const empresas = [
    { id: 1, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#E63946" },
    { id: 2, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#457B9D" },
    { id: 3, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#F4A261" },
    { id: 4, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#2A9D8F"},
    { id: 5, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#264653" },
    { id: 6, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#8D99AE" },
    { id: 7, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#FFB703" },
    { id: 8, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#6A0572" },
    { id: 9, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#D62828" },
    { id: 10, nombre: "Nombre Empresa", imagen: (icon), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad", bg :"#a8322c" }
];

const FavoritesTarjets = () => {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

            {empresas.map((empresa, index) => (
                        <TarjetCompany
                            key={empresa.id}
                            icon={empresa.imagen}
                            bg={empresa.bg}
                            name={empresa.nombre}
                            tipoSuscripcion={empresa.tipoSuscripcion}
                            tiempoCaducidad={empresa.tiempoCaducidad}
                        />
                    ))}
        </div>
    );
}
export default FavoritesTarjets;