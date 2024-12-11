// Gallery.js
import React from "react";
import galleryImage1 from "../assets/web1.jpeg";
import galleryImage2 from "../assets/web2.jpeg";
import galleryImage3 from "../assets/web3.jpeg";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Galería de Imágenes</h2>
      <div className="gallery-grid">
        <img src={galleryImage1} alt="Clase 1" />
        <img src={galleryImage2} alt="Clase 2" />
        <img src={galleryImage3} alt="Clase 3" />
      </div>
    </section>
  );
}

export default Gallery;
