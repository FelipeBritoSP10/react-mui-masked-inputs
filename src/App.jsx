import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import NavBar from "./Layout/NavBar";
import CPFInput from "./Components/Cpfinput";
import CnpjInput from "./Components/CNPJInput";
import CEPInput from "./Components/CEPInput";
import DateInput from "./Components/DateInput";
import PhoneInput from "./Components/PhoneInput";
import CNHInput from "./Components/CNHInput";

function App() {
    // Estados para armazenar os valores dos inputs
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [cnh, setCnh] = useState("");

  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Mantendo os inputs centralizados */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", 
          width: "100vw",  
          flexDirection: "column", // Coloca a Stack abaixo da NavBar
          marginTop: "10px", // Evita sobreposição com a NavBar
        }}
      >
        <Stack spacing={2} width="300px">
          <CPFInput value={cpf} onChange={setCpf} />
          <CnpjInput value={cnpj} onChange={setCnpj} />
          <CEPInput value={cep} onChange={setCep} />
          <DateInput value={date} onChange={setDate} />
          <PhoneInput value={phone} onChange={setPhone} />
          <CNHInput value={cnh} onChange={setCnh} />
        </Stack>
      </Box>
    </>
  );
}

export default App;
