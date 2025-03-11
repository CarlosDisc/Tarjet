import React, { useState, useEffect} from "react";
import Tarjet from "../Tarjet";
import TarjetaEjemp1 from '../../images/TarjetaEjem1.png';

const empresas = [
    { id: 1, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 2, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 3, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 4, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 5, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 6, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 7, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 8, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 9, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 10, nombre: "Nombre Empresa", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" }
];

const FavoritesTarjets = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

            {empresas.map((empresa, index) => (
                        <Tarjet 
                            key={empresa.id}
                            img={empresa.imagen}
                            nombre={empresa.nombre}
                            tipoSuscripcion={empresa.tipoSuscripcion}
                            tiempoCaducidad={empresa.tiempoCaducidad}
                            isHovered={hoveredIndex === index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))}
        </div>
    );
}
export default FavoritesTarjets;