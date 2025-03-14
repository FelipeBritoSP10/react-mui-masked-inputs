import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import CPFInput from "./Components/Cpfinput";
import CnpjInput from "./Components/CNPJInput";
import CEPInput from "./Components/CEPInput";
import DateInput from "./Components/DateInput";

function App() {
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [date, setDate] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Ocupa toda a altura da tela
        width: "100vw",  // Ocupa toda a largura da tela
      }}
    >
      {/* Stack organiza os inputs um abaixo do outro */}
      <Stack spacing={2} width="300px">
        <CPFInput value={cpf} onChange={setCpf} />
        <CnpjInput value={cnpj} onChange={setCnpj} />
        <CEPInput value={cep} onChange={setCep}/>
        <DateInput value={date} onChange={setDate}/>
      </Stack>
    </Box>
  );
}

export default App;
