import React from 'react';

const Schedule = ({ openingHours }) => {
    return (
        <div className="flex flex-col justify-center items-center mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🕒 Horario de Atención</h2>
            
            {/* 🔹 Encabezados de tabla */}
            <div className="grid grid-cols-3 w-full text-center font-semibold text-gray-700 bg-gray-200 p-3 rounded-lg text-lg">
                <span className="w-full">Día</span>
                <span className="w-full">Mañana</span>
                <span className="w-full">Tarde</span>
            </div>

            <div className="w-full">
                {openingHours ? (
                    <ul className="w-full">
                        {Object.entries(openingHours).map(([day, hours]) => (
                            <li key={day} className="grid grid-cols-3 text-center border-b border-gray-300 p-4 items-center text-lg">
                                <strong className="text-gray-700">{day}</strong>

                                {typeof hours === "string" ? (
                                    // 🔹 Horario continuo
                                    <span className="col-span-2 text-gray-600 font-medium">{hours}</span>
                                ) : (
                                    // 🔹 Horario separado en mañana/tarde
                                    <>
                                        <span className="text-gray-600 font-medium">{hours.mañana || "—"}</span>
                                        <span className="text-gray-600 font-medium">{hours.tarde || "—"}</span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-xl text-red-500 font-semibold">⚠️ No se ha proporcionado horario de atención.</p>
                )}
            </div>
        </div>
    );
};

export default Schedule;