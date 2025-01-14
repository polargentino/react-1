import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "e5fddd4468294dc79e2150015251401";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city.");
      return;
    }

    setError(""); // Limpiar errores
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
    }
  };

  // Estilos en línea para diseño bonito y responsivo
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f0f4f8",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "calc(100% - 22px)",
      marginBottom: "10px",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    weatherInfo: {
      textAlign: "left",
      marginTop: "20px",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={fetchWeather}
      >
        Get Weather
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {weather && (
        <div style={styles.weatherInfo}>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Weather icon" />
          <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
