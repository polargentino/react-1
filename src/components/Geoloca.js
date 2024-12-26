import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography, CircularProgress } from "@mui/material";

function Geoloca() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = () => {
    setLoading(true);
    setError(null);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          });
          setLoading(false);
        },
        (err) => {
          setError("No se pudo obtener la ubicación. Por favor, inténtalo de nuevo.");
          setLoading(false);
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        background: "linear-gradient(45deg, #0f2027, #203a43, #2c5364)", // Fondo futurista
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          padding: 3,
          textAlign: "center",
          borderRadius: "16px", // Bordes redondeados para estilo futurista
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Sombra sutil
          background: "rgba(255, 255, 255, 0.1)", // Fondo translúcido para card
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: "#fff", fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
            Geolocalización
          </Typography>

          {loading ? (
            <CircularProgress size={50} sx={{ color: "#00bcd4" }} />
          ) : location ? (
            <Box>
              <Typography variant="body1" sx={{ color: "#fff", fontSize: "1.1rem" }}>
                <strong>Latitud:</strong> {location.latitude}
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff", fontSize: "1.1rem" }}>
                <strong>Longitud:</strong> {location.longitude}
              </Typography>
            </Box>
          ) : error ? (
            <Typography variant="body1" color="error" sx={{ fontSize: "1.1rem" }}>
              {error}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ color: "#fff", fontSize: "1.1rem" }}>
              Haz clic en el botón para obtener tu ubicación.
            </Typography>
          )}
        </CardContent>
        <Button
          variant="contained"
          color="secondary"
          onClick={getLocation}
          disabled={loading}
          sx={{
            marginTop: 2,
            padding: "10px 20px",
            fontSize: "1.2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#ff4081", // Color vibrante
            '&:hover': {
              backgroundColor: "#e91e63", // Color al pasar el cursor
            },
          }}
        >
          Obtener ubicación
        </Button>
      </Card>
    </Box>
  );
}

export default Geoloca;



