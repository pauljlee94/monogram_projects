import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Connect from "./components/Connect"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Contact />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
