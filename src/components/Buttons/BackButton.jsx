import React from "react";

const BackButton = ({ onClick, label = "Atras" }) => {
  return (
    <button
      className="flex items-center bg-transparent text-gray-600 py-2 px-4 rounded  transition duration-300 ease-in-out"
      onClick={() => window.history.back()}
    >
      {/* Flecha personalizada con el color #63C3D1 */}
      <span style={{ color: "#63C3D1", marginRight: "8px" }}>&lt;</span>
      {label}
    </button>
  );
};

export default BackButton;