import React from 'react';

const Schedule = ({ openingHours, bg }) => {
    
    return (
        <div
            className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8"
            style={{
                border: `6px solid ${bg}`, // Aplica el borde dinámico con el valor de bg
                borderRadius: '1rem',
            }}
        >
            <div className="bg-white text-black rounded-xl p-4 sm:p-6 w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                    🕒 Horario de Atención
                </h2>

                {/* Encabezados */}
                <div className="grid grid-cols-3 w-full text-center font-semibold bg-gray-200 p-3 rounded-lg text-base sm:text-lg mb-4">
                    <span>Día</span>
                    <span className="border-l border-gray-400">Mañana</span>
                    <span className="border-l border-gray-400">Tarde</span>
                </div>

                <div className="w-full">
                    {openingHours ? (
                        <ul className="w-full">
                            {Object.entries(openingHours).map(([day, hours]) => (
                                <li
                                    key={day}
                                    className="grid grid-cols-3 text-center border-b border-gray-300 p-3 sm:p-4 items-center text-base sm:text-lg"
                                >
                                    <strong>{day}</strong>
                                    {typeof hours === "string" ? (
                                        <span className="col-span-2 font-medium border-l border-gray-300">
                                            {hours}
                                        </span>
                                    ) : (
                                        <>
                                            <span className="font-medium border-l border-gray-300">
                                                {hours.mañana || "—"}
                                            </span>
                                            <span className="font-medium border-l border-gray-300">
                                                {hours.tarde || "—"}
                                            </span>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-xl text-yellow-500 font-semibold text-center">
                            ⚠️ No se ha proporcionado horario de atención.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
