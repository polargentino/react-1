import React from 'react';

const Map = () => {
  const mapStyles = {
    container: {
      margin: '0 auto',
      maxWidth: '90%', // Ancho máximo del mapa
    },
    mapContainer: {
      height: '400px', // Altura fija del mapa
      borderRadius: '8px', // Bordes redondeados
      overflow: 'hidden', // Evita desbordamiento del iframe
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra para un diseño limpio
    },
    iframe: {
      border: 0, // Sin borde en el iframe
      width: '100%', // Ocupa todo el ancho del contenedor
      height: '100%', // Ocupa toda la altura del contenedor
    },
  };

  return (
    <section id="location" className="container my-5" style={mapStyles.container}>
      <h2 className="text-center">Ubicación</h2>
      <p className="text-center">Visítanos en nuestra ubicación</p>
      <div className="d-flex justify-content-center" style={mapStyles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3396.723330452026!2d-60.69156072540061!3d-31.641424774158736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1730401433644!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={mapStyles.iframe}
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
