import React from "react";
import ButtonCustomWhite from "../Buttons/ButtonCustomWhite"; // Asegúrate de que la ruta esté bien configurada

const ContactUs = () => {
  return (
    <div className="flex items-center justify-between bg-[#63C3D1] py-8 px-12">
      <div className="text-white text-xl font-bold flex-1">
        "Conecta con tus clientes de manera innovadora y profesional"
      </div>
      <div className="flex items-center justify-center flex-1">
        <div className="w-48">
            <ButtonCustomWhite text="Contáctanos" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
