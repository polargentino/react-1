import React, { useState } from "react";
import './Quini.css'; // Aquí importamos los estilos de Quini.js.

const Quini = () => {
  // Estado para guardar los números ganadores
  const [numbers, setNumbers] = useState([]);
  
  // Función para generar los números aleatorios
  const generateNumbers = () => {
    let selectedNumbers = [];
    while (selectedNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 46);
      if (!selectedNumbers.includes(randomNumber)) {
        selectedNumbers.push(randomNumber);
      }
    }
    setNumbers(selectedNumbers);
  };

  return (
    <div className="quini-container"> {/* Contenedor específico para Quini.js */}
      <div className="header">
        <h1 className="title">¡Quini 6! Diseño web</h1>
        <p>¡Sigue la suerte y apretá la palanca!</p>
      </div>
      <div className="numbers-display">
        {numbers.length > 0 ? (
          numbers.map((number, index) => (
            <div key={index} className="number-card">
              {number}
            </div>
          ))
        ) : (
          <p className="instructions">¡Pulsa la palanca para ver los números ganadores!</p>
        )}
      </div>
      <button className="lever" onClick={generateNumbers}>¡Apretá la palanca!</button>
    </div>
  );
};

export default Quini;
