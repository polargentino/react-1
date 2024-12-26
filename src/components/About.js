import React from "react";
import { Box, Typography } from "@mui/material";
import "./About.css";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        minHeight: "100vh",
        backgroundColor: "#121212", // Fondo oscuro tipo terminal
        color: "#00FF00", // Texto verde como terminal
        fontFamily: "'Press Start 2P', cursive", // Fuente tipo shell
        textAlign: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Sobre el Curso
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.5, maxWidth: "800px" }}>
        Este curso está diseñado para principiantes que desean aprender diseño web desde cero. Aprenderás HTML, CSS, JavaScript y las mejores prácticas de diseño web.
      </Typography>
    </Box>
  );
}

export default About;
