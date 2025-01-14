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

//import Gemini from "./components/Gemini";

//import Back from "./components/Back";
import Game from "./components/Game";
import MoviePlayer from "./components/MoviePlayer";
import Weather from "./components/Weather";
//import SpotifyPlayer from "./components/SpotifyPlayer";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<Gemini />*/}
      {/*<SpotifyPlayer />*/}
      <Map />
      <MoviePlayer />
      {/*<Gallery />*/}
      <Geoloca />
      <BasicMasonry />
     <Game />
     {/*<Back />*/}
      <About />
      <Reloj />
      <Weather />
      <Contact />
      <Quini />
      <Footer />
    </div>
  );
}

export default App;








