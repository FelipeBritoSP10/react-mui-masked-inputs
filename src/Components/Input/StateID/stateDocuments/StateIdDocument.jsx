import React from "react";
import { TextField } from "@mui/material";
import IMask from "imask";

/**
 * Componente para o campo de entrada de RG.
 * Aplica uma máscara para formatar corretamente o número.
 */

const StadeIdDocument = ({ value, onChange, ...props }) => {
    const inputRef = React.useRef();

    React.useEffect(() => {
        const rgMask = IMask(inputRef.current, {
            mask: "00.000.000-0", // Máscara para o RG
        });

        rgMask.on("accept", () => {
            onChange(rgMask.value);
        });

        return () => {
            rgMask.destroy();
        };
    }, [onChange]);

    return (
        <TextField
            inputRef={inputRef}
            label="RG"
            variant="outlined"
            value={value}
            fullWidth
            {...props}
        />
    );
};

export default StadeIdDocument;