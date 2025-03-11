import React from 'react';
import suscripcion from '../../assets/suscripcion.png'
import time from '../../assets/time.png'
const Suscripcion = () => {
    return (
        <div >
          {/* Sección: Suscripción activa */}
            <h2 className="text-lg font-bold text-[#545F71] flex items-center">
                Suscripción activa
            </h2>
            <p className="text-[#545F71] text-sm mb-4">
                Lista suscripción activa
            </p>
            <hr className="border border-gray-100" />
    
            {/* Sección: Método de pago */}
            <div className="mt-4">
                <h3 className="text-lg font-bold text-[#545F71]">Método de pago</h3>
                    <div className="flex items-center mt-2 text-gray-600">
                        <img 
                            src={suscripcion} 
                            alt="Método de pago" 
                            className="w-5 h-5 mr-2" />
                                <span className="font-semibold">VISA</span>
                                <span className="ml-2">............1234</span>
                                <span className="ml-auto text-gray-500">CAD 06/2027</span>
                    </div>
                <button className="text-[#63C3D1] text-sm mt-2 hover:underline">
                    Cambiar método de pago
                </button>
            </div>
            <hr className="my-4 border border-gray-100" />
            {/* Sección: Historial de pago */}
            <div>
                <h3 className="text-lg font-bold text-[#545F71]">Historial de pago</h3>
                    <div className="flex items-center mt-2 text-gray-600">
                        <img 
                            src={time} 
                            alt="Historial" 
                            className="w-5 h-5 mr-2" />
                                <span>Último pago DD/MM/AAAA</span>
                    </div>
                <button className="text-[#63C3D1] text-sm mt-2 hover:underline">
                    Ver historial de pago
                </button>
            </div>
            </div>
      );
}
export default Suscripcion;