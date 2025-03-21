import React from "react";
import aboutusImage2 from '../../../images/aboutusImage2.png';
import objects from '../../../assets/objects.png';

const DesignSolution2 = () => {
    return (
        <div className="flex ">
            <div className="bg-[#EBEBEB] rounded-lg w-full md:w-3/4 p-8 flex justify-between items-start pl-20">
            {/* Contenedor de texto (li + p alineados verticalmente) */}
                <div className="space-y-6">
                    <h1 className="text-[#545F71] text-4xl font-bold mb-12">
                        We provide the best design <br /> solution in town
                    </h1>
                    <ul className="space-y-20">
                        <li className="flex items-start space-x-4 ">
                            <img 
                                src={objects} 
                                alt="Check" 
                                className="w-12 h-12 mr-2" 
                            />
                            <div className="text-[#545F71]">
                                <div className="font-bold">
                                    Best user interfaces
                                </div> 
                                <p className="text-[#545F71]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                        <li className="flex items-center ">
                            <img 
                                src={objects} 
                                alt="Check" 
                                className="w-12 h-12 mr-2" 
                            />
                            <div className="text-[#545F71]">
                                <div className="font-bold">
                                    Smooth development
                                </div> 
                                <p className="text-[#545F71]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                        <li className="flex items-center ">
                            <img 
                                src={objects} 
                                alt="Check" 
                                className="w-12 h-12 mr-2" 
                            />
                            <div className="text-[#545F71]">
                                <div className="font-bold">
                                    Quality web design
                                </div> 
                                <p className="text-[#545F71]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                    </ul>
                </div> 
            </div>
            <div className="w-1/2 mt-10 -ml-80 pb-10">
                    <img 
                        src={aboutusImage2} 
                        alt="About Us" 
                        className="w-full h-auto rounded-lg" />
                </div>
        </div>
    );
}
export default DesignSolution2;
