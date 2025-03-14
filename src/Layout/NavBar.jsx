import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

/**
 * Componente da barra de navegação.
 * Exibe um título no topo da aplicação.
 */

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Container maxWidth="md" style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Inputs Formatados
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;