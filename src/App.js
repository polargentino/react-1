// App.js
import React from "react";
import Header from "./components/Header";
//import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reloj from "./components/Reloj";
import Geoloca from "./components/Geoloca";
import Map from "./components/Map";
import Quini from "./components/Quini";


import BasicMasonry from './components/Mui';

import Gemini from "./components/Gemini";

function App() {
  return (
    <div className="App">
      <Header />
      <Gemini />
      <Map />
      {/*<Gallery />*/}
      <Geoloca />
      <BasicMasonry />
     
     
      <About />
      <Reloj />
      <Contact />
      <Quini />
      <Footer />
    </div>
  );
}

export default App;








