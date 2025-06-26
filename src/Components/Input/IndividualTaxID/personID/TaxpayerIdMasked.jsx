import React, { useEffect, useRef } from "react";
import { TextField, Box } from "@mui/material";
import IMask from "imask";

/**
 * Componente para o campo de entrada de CPF.
 * Aplica uma máscara para formatar corretamente o CPF no padrão XXX.XXX.XXX-XX.
 */

const TaxpayerIdMasked = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const mask = IMask(inputRef.current, {
        mask: "000.000.000-00",
      });

      mask.on("accept", () => onChange(mask.value));
    }
  }, [onChange]);

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <TextField
        label="CPF"
        variant="outlined"
        inputRef={inputRef}
        defaultValue={value}
      />
    </Box>
  );
};

export default TaxpayerIdMasked;
