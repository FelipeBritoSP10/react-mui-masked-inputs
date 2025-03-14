import React, { useEffect, useRef } from "react";
import { TextField, Box } from "@mui/material";
import IMask from "imask";

/**
 * Componente para o campo de entrada de telefone.
 * Aplica uma máscara para formatar corretamente o número.
 */

const PhoneInput = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const inputElement = inputRef.current?.querySelector("input");
    if (!inputElement) return;

    // Aplica a máscara para números fixos e celulares
    const mask = IMask(inputElement, {
      mask: ["(00) 0000-0000", "(00) 00000-0000"],
    });

    mask.on("accept", () => onChange(mask.value));
    return () => mask.destroy();
  }, [onChange]);

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <TextField label="Telefone" variant="outlined" inputRef={inputRef} defaultValue={value} />
    </Box>
  );
};

export default PhoneInput;