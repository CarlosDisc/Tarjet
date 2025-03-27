import React from 'react';

const Schedule = ({ openingHours }) => {
    return (
        <div className="flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-semibold">Horario de Atención</h2>
            <div className="mt-4">
                {openingHours ? (
                    <ul className="list-disc">
                        {Object.entries(openingHours).map(([day, hours]) => (
                            <li key={day} className="text-lg">
                                <strong>{day}:</strong> {hours}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-xl text-red-500">No se ha proporcionado horario de atención.</p>
                )}
            </div>
        </div>
    );
};

export default Schedule;