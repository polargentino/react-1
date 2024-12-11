// Contact.js
import React from "react";
import "./Contact.css";

function Contact() {
  return (
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
  );
}

export default Contact;
