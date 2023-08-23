import React, { useContext } from "react";
import "../blocks/ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="switch">
      <input
        onChange={handleToggleSwitchChange}
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
