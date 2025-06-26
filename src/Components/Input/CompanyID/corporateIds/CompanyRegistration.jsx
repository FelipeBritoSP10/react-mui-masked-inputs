import React, { useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import IMask from "imask";

/**
 * Componente para o campo de entrada de CNPJ.
 * Aplica uma máscara para formatar corretamente o CNPJ no padrão XX.XXX.XXX/0001-XX.
 */

const CompanyRegistration = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const mask = IMask(inputRef.current, {
        mask: "00.000.000/0000-00",
      });

      mask.on("accept", () => {
        onChange(mask.value);
      });

      return () => mask.destroy();
    }
  }, [onChange]);

  return (
    <TextField
      inputRef={inputRef}
      label="CNPJ"
      variant="outlined"
      fullWidth
    />
  );
};

export default CompanyRegistration;