import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AOS from "aos"
import "./App.css";
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Property from "./components/Property";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

AOS.init()

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Property />
      <Contact />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
