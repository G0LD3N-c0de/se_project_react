import React, { useState } from "react";
import "../blocks/ToggleSwitch.css";

function ToggleSwitch() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleTempUnitChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };
  console.log(currentTemperatureUnit);
  return (
    <label className="switch">
      <input
        onChange={handleTempUnitChange}
        className="switch__checkbox"
        type="checkbox"
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__button switch__button_F"
            : "switch__button switch__button_C"
        }
      ></span>
      <p
        className={`switch__temp-unit-F ${
          currentTemperatureUnit === "F" && "switch__temp-unit_active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-unit-C ${
          currentTemperatureUnit === "C" && "switch__temp-unit_active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
