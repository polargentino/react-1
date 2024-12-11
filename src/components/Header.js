// Header.js
import React from "react";
import logo from "../logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Curso de Diseño Web</h1>
      <h2>Esc. Domingo Cullen 637</h2>
      <p>Aprende a crear páginas web modernas y atractivas con nosotros.</p>
      <a
        className="App-link"
        href="https://polargentino.github.io/escuela637-1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inscríbete Ahora
      </a>
    </header>
  );
}

export default Header;
