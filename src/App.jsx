import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import NavBar from "./Layout/NavBar";
import TaxpayerIdMasked from "./Components/Input/IndividualTaxID/personID/TaxpayerIdMasked";
import CompanyRegistration from "./Components/Input/CompanyID/corporateIds/CompanyRegistration";
import ZipcodeBrazil from "./Components/Input/BrazilianZipCode/PostalCodeBR/ZipcodeBrazil";
import BirthDatePicker from "./Components/Input/DateOfBirth/UserBirth/BirthDatePicker";
import PhoneMasked from "./Components/Input/PhoneNumber/contactNumbers/PhoneMasked";
import VehicleOperatorLicenseNumber from "./Components/Input/DriverLicense/licenseNumbers/VehicleOperatorLicenseNumber";
import NationalInsuranceNumber from "./Components/Input/SocialSecurityID//socialBenefits/NationalInsuranceNumber";
import StateIdDocument from "./Components/Input/StateID//stateDocuments/StateIdDocument";

function App() {
  // Estados para armazenar os valores dos inputs
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [cnh, setCnh] = useState("");
  const [pis, setPis] = useState("");
  const [rg, setRG] = useState("");

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
          <TaxpayerIdMasked value={cpf} onChange={setCpf} />
          <CompanyRegistration value={cnpj} onChange={setCnpj} />
          <ZipcodeBrazil value={cep} onChange={setCep} />
          <BirthDatePicker value={date} onChange={setDate} />
          <PhoneMasked value={phone} onChange={setPhone} />
          <VehicleOperatorLicenseNumber value={cnh} onChange={setCnh} />
          <NationalInsuranceNumber value={pis} onChange={setPis} /> 
          <StateIdDocument value={rg} onChange={setRG} /> 
        </Stack>
      </Box>
    </>
  );
}

export default App;
