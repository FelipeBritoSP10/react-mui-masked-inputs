import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import IMask from "imask";

/**
 * Componente para o campo de entrada de PIS.
 * Aplica uma máscara para formatar corretamente o número do PIS.
 */

const PisInput = ({ value, onChange, ...props }) => {
  const handleChange = (event) => {
    const maskedValue = event.target.value;
    onChange(maskedValue);
  };

  useEffect(() => {
    const inputElement = document.getElementById("pis-input");

    if (inputElement) {
      const pisMask = IMask(inputElement, {
        mask: "000.00000.00-0", // A máscara do PIS
      });

      inputElement.addEventListener("input", (event) => {
        const maskedValue = pisMask.value;
        onChange(maskedValue);
      });
    }
  }, [onChange]);

  return (
    <TextField
      id="pis-input"
      label="PIS"
      variant="outlined"
      value={value}
      onChange={handleChange}
      fullWidth
      {...props}
    />
  );
};

export default PisInput;