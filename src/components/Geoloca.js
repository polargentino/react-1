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
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", padding: 2, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Geolocalización
          </Typography>

          {loading ? (
            <CircularProgress />
          ) : location ? (
            <Box>
              <Typography variant="body1">
                <strong>Latitud:</strong> {location.latitude}
              </Typography>
              <Typography variant="body1">
                <strong>Longitud:</strong> {location.longitude}
              </Typography>
            </Box>
          ) : error ? (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          ) : (
            <Typography variant="body1">
              Haz clic en el botón para obtener tu ubicación.
            </Typography>
          )}
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={getLocation}
          disabled={loading}
          sx={{ marginTop: 2 }}
        >
          Obtener ubicación
        </Button>
      </Card>
    </Box>
  );
}

export default Geoloca;



