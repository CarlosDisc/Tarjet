import React from "react";

const steps = [
  {
    title: "Primer paso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Segundo paso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Tercer paso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const HowToApply = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-[#F5F5F5] "> {/* Aquí agregamos min-h-screen y eliminamos margenes */}
      <h2 className="text-2xl font-bold mb-8 text-center">Pasos para solicitar tu espacio aquí</h2>
      <div className="flex flex-row justify-center gap-8 max-w-4xl">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#63C3D1]"></div>
            <h3 className="mt-4 text-lg font-bold text-black">{step.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToApply;

