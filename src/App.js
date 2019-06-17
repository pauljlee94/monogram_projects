import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

import Main from "./components/Main";
import PropertyPage from "./components/PropertyPage";
import Error from "./components/Error";

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
