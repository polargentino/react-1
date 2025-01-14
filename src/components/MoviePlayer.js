import React, { useState } from "react";
import ReactPlayer from "react-player";

const MoviePlayer = () => {
  const movies = [
    { title: "Inception", trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
    { title: "The Matrix", trailerUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU" },
    { title: "Interstellar", trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E" },
  ];

  const [selectedTrailer, setSelectedTrailer] = useState(null);

  // Estilos en objetos de JavaScript
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      backgroundColor: "#f4f4f9",
      color: "#333",
      padding: "20px",
    },
    title: {
      color: "#222",
    },
    list: {
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    listItem: {
      margin: "10px",
    },
    button: {
      backgroundColor: "#6200ea",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#3700b3",
    },
    playerContainer: {
      margin: "20px auto",
      maxWidth: "90%",
      textAlign: "center",
    },
    player: {
      width: "100%",
      maxWidth: "700px",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Movie Player</h1>
      <ul style={styles.list}>
        {movies.map((movie, index) => (
          <li key={index} style={styles.listItem}>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              onClick={() => setSelectedTrailer(movie.trailerUrl)}
            >
              {movie.title}
            </button>
          </li>
        ))}
      </ul>
      {selectedTrailer && (
        <div style={styles.playerContainer}>
          <h2>Playing Trailer</h2>
          <ReactPlayer style={styles.player} url={selectedTrailer} controls />
        </div>
      )}
    </div>
  );
};

export default MoviePlayer;


