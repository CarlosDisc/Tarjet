import React from 'react';
import aboutusImage from '../../../images/aboutusImage.png';
import aboutusImage3 from '../../../images/aboutusImage3.png';
import objects from '../../../assets/objects.png';
import ButtonCustom from '../../Buttons/ButtonCustom';

const DesignSolution = () => {
    return (
        <div className="flex flex-col items-center text-center py-16 px-8">
            {/* Título centrado */}
                <h1 className="text-[#545F71] text-4xl font-bold mb-12">
                    We provide the best design <br /> solution in town
                </h1>

            {/* Contenedor principal con dos columnas */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                
                {/* Columna izquierda - Imágenes */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                    {/* Imagen principal - Más a la izquierda */}
                    <img 
                        src={aboutusImage} 
                        alt="About Us" 
                        className="w-4/5 rounded-lg shadow-lg ml-[-200px]" 
                    />

                    {/* Imagen secundaria - Más a la derecha */}
                    <img 
                        src={aboutusImage3} 
                        alt="About Us Small" 
                        className="absolute top-10 right-[-20px] w-2/5 rounded-lg shadow-md" 
                    />
                </div>


                {/* Columna derecha - Texto y lista */}
                <div className="w-full md:w-1/2 text-left px-6">
                    {/* Texto descriptivo */}
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, mollitia reprehenderit corporis nulla autem cumque minima magni vero vitae quaerat aspernatur quidem assumenda praesentium doloremque quo! Sit, quam. Optio, nesciunt?
                    </p>
                    
                    {/* Lista con icono */}
                    <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg">
                        <ul className="space-y-3 text-[#545F71] font-medium">
                            <li className="flex items-center">
                                <img src={objects} 
                                alt="Check" 
                                className="w-6 h-6 mr-2" />
                                    Diseño web
                            </li>
                            <li className="flex items-center">
                                <img src={objects} 
                                alt="Check" 
                                className="w-6 h-6 mr-2" />
                                    Desarrollo de software a medida
                            </li>
                            <li className="flex items-center">
                                <img src={objects} 
                                alt="Check" 
                                className="w-6 h-6 mr-2" />
                                    Soluciones Empresariales
                            </li>
                        </ul>
                        <div className="flex justify-end mt-4 ">
                            <div className="inline-flex w-[150px]">
                                <ButtonCustom text="Planes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignSolution;
