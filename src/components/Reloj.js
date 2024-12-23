import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

function Reloj() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { timeZone: "America/Argentina/Buenos_Aires", hour12: false };
  const timeString = time.toLocaleTimeString("es-AR", options);

  const StyledPaper = styled(Paper)(({ theme }) => ({
    maxWidth: 400,
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
  }));

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h4" component="h2" gutterBottom>
        Hora en Argentina
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        {timeString}
      </Typography>
    </StyledPaper>
  );
}

export default Reloj;
