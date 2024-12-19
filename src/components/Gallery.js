// Gallery.js
import React from "react";
import galleryImage1 from "../assets/gpt-1.webp";
import galleryImage2 from "../assets/gpt-2.webp";
import galleryImage3 from "../assets/gpt-3.jpeg";

import galleryImage4 from "../assets/gpt-4.jpeg";
import galleryImage5 from "../assets/gpt-5.jpeg";
import galleryImage6 from "../assets/gpt-6.jpeg";

import galleryImage7 from "../assets/gpt-7.jpeg";
import galleryImage8 from "../assets/gpt-8.jpeg";
import galleryImage9 from "../assets/gpt-9.jpeg";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Galería de Imágenes</h2>
      <div className="gallery-grid">
        <img src={galleryImage1} alt="Clase 1" />
        <img src={galleryImage2} alt="Clase 2" />
        <img src={galleryImage3} alt="Clase 3" />

        <img src={galleryImage4} alt="Clase 4" />
        <img src={galleryImage5} alt="Clase 5" />
        <img src={galleryImage6} alt="Clase 6" />

        <img src={galleryImage7} alt="Clase 7" />
        <img src={galleryImage8} alt="Clase 8" />
        <img src={galleryImage9} alt="Clase 9" />

      </div>
    </section>
  );
}

export default Gallery;
