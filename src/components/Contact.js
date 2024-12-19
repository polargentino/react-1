import React from 'react';
import './Contact.css'; // Archivo CSS para estilos personalizados

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <hr className="contact-divider" />
      <p className="contact-message">
        Gracias por tomarse el tiempo. Me comunicaré a la brevedad.
      </p>

      <form 
        action="https://formspree.io/f/manybebj" 
        method="POST" 
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            required 
            className="form-input"
          ></textarea>
        </div>

        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;







