import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (phoneNumber) => {
    if (phoneNumber) {
      // Extrae solo el código del país (+XX)
      const match = phoneNumber.match(/^\+\d+/);
      setValue(match ? match[0] : "");
    }
  };

  return (
    <div className="">
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={handleChange}
        className="w-26 px-3 py-2 border border-gray-400 shadow-lg shadow-gray-400/40 rounded-lg text-gray-700 text-center bg-gray-100"
    
      />
    </div>
  );
};

export default PhoneNumberInput;

