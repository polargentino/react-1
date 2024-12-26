import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

import galleryImage1 from "../assets/gpt-1.webp";
import galleryImage2 from "../assets/gpt-2.webp";
import galleryImage3 from "../assets/gpt-3.jpeg";
import galleryImage4 from "../assets/gpt-4.jpeg";
import galleryImage5 from "../assets/gpt-5.jpeg";
import galleryImage6 from "../assets/gpt-6.jpeg";
import galleryImage7 from "../assets/gpt-7.jpeg";
import galleryImage8 from "../assets/gpt-8.jpeg";
import galleryImage9 from "../assets/gpt-9.jpeg";

const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
  galleryImage8,
  galleryImage9,
];

// Estilo para el fondo con gradiente animado
const BackgroundContainer = styled(Box)({
  background: "linear-gradient(45deg, #ff7e5f, #feb47b, #ff7e5f, #6a11cb, #2575fc, #a2c2e4)",
  backgroundSize: "400% 400%",
  animation: "gradientBG 15s ease infinite",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <BackgroundContainer sx={{ padding: 2 }}>
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: "24px", marginBottom: "20px" }}>Galería de Imágenes</h1>

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}  // Breakpoints responsivos
        spacing={2}
      >
        {galleryImages.map((image, index) => (
          <Item key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </Item>
        ))}
      </Masonry>

      <h1 style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}>Fin de la Galería</h1>
    </BackgroundContainer>
  );
}

  
  

  

