import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <div className="filler"></div>
    </div>
  );
}

export default App;
