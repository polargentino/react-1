// App.js
import React from "react";
import "./App.css";
import logo from "./logo.svg";
import galleryImage1 from "./assets/web1.jpeg";
import galleryImage2 from "./assets/web2.jpeg";
import galleryImage3 from "./assets/web3.jpeg";

function App() {
  return (
    <div className="App">
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

      <section className="gallery">
        <h2>Galería de Imágenes</h2>
        <div className="gallery-grid">
          <img src={galleryImage1} alt="Clase 1" />
          <img src={galleryImage2} alt="Clase 2" />
          <img src={galleryImage3} alt="Clase 3" />
        </div>
      </section>

      <section className="about">
        <h2>Sobre el Curso</h2>
        <p>
          Este curso está diseñado para principiantes que desean aprender diseño
          web desde cero. Aprenderás HTML, CSS, JavaScript y las mejores
          prácticas de diseño web.
        </p>
      </section>

      <section className="contact">
        <h2>Contacto</h2>
        <form>
          <label>
            Nombre:
            <input type="text" name="name" required />
          </label>
          <label>
            Correo Electrónico:
            <input type="email" name="email" required />
          </label>
          <label>
            Mensaje:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer className="App-footer">
        <p>
          © 2024 Esc. Domingo Cullen 637. Todos los derechos reservados. | Diseñado
          con ❤️ por estudiantes del curso.
        </p>
      </footer>
    </div>
  );
}

export default App;


