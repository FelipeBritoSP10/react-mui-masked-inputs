import React, { useEffect, useRef } from "react";
import { TextField, Box } from "@mui/material";
import IMask from "imask";

/**
 * Componente para o campo de entrada de CNH.
 * Aplica uma máscara para limitar a CNH a 11 dígitos numéricos.
 */

const VehicleOperatorLicenseNumber = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const inputElement = inputRef.current?.querySelector("input");
    if (!inputElement) return;

    const mask = IMask(inputElement, {
      mask: "00000000000",
      maxLength: 11,
    });

    mask.on("accept", () => {
      if (mask.value.length <= 11) {
        onChange(mask.value);
      }
    });

    return () => mask.destroy();
  }, [onChange]);

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <TextField
        label="CNH"
        variant="outlined"
        inputRef={inputRef}
        defaultValue={value}
        inputProps={{ maxLength: 11 }} // Adicionando restrição extra no input
      />
    </Box>
  );
};

export default VehicleOperatorLicenseNumber;