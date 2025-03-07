import React from "react";
import Card from "./Card";
import TarjetaEjemp1 from '../../images/TarjetaEjem1.png';

const empresas = [
    { id: 1, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 2, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 3, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 4, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 5, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 6, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 7, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 8, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 9, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" },
    { id: 10, nombre: "Nombre Tarjeta", imagen: (TarjetaEjemp1), tipoSuscripcion:"Tipo de suscripcion", tiempoCaducidad :"Tiempo de caducidad" }
];

const PersonalTarget = () => {
    return(
        <div>
            {empresas.map((empresa) => (
                        <Card 
                            key={empresa.id} 
                            nombreEmpresa={empresa.nombre} 
                            imagen={empresa.imagen}
                            tipoSuscripcion={empresa.tipoSuscripcion}
                            tiempoCaducidad={empresa.tiempoCaducidad}
                            boton="Editar"
                            />
                    ))}
        </div>
    );
}
export default PersonalTarget;