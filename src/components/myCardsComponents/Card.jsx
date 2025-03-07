import React from 'react';
import ButtonCustom from '../Buttons/ButtonCustom';

const Card = ({nombreEmpresa, imagen , tipoSuscripcion, tiempoCaducidad, boton}) => {

    return (
        <div className="w-full md:w-1/2 max-w-lg flex flex-col gap-4">
            {/* Nombre de la Empresa arriba */}
            <p className="text-lg font-semibold">{nombreEmpresa}</p>

            {/* Contenedor de imagen + info alineados horizontalmente */}
            <div className="flex items-stretch gap-4">
                {/* Contenedor izquierdo: Imagen */}
                <div className="w-2/3">
                <img 
                    src={imagen} 
                    alt={nombreEmpresa} 
                    className="w-full h-auto rounded-lg shadow-md" />
                </div>

                {/* Contenedor derecho: Información y botón distribuidos equitativamente */}
                <div className="w-1/3 flex flex-col justify-between">
                    <p className="text-gray-600 text-sm font-semibold flex-1 flex items-center">{tipoSuscripcion}</p>
                    <p className="text-gray-500 text-sm flex-1 flex items-center">{tiempoCaducidad}</p>
                        <div className="flex-1 flex items-end">
                            <ButtonCustom 
                                text={boton} 
                            />
                        </div>
                </div>
            </div>
            </div>
    );
}
export default Card;