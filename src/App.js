import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

import Main from "./components/Main";
import Dartmoor from "./components/Dartmoor"
import Jackson from "./components/Jackson"
import George from "./components/George"
import Casco from "./components/Casco"
import Error from "./components/Error";

AOS.init();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/dartmoor" component={Dartmoor} />
          <Route path="/jackson" component={Jackson} />
          <Route path="/george" component={George} />
          <Route path="/casco" component={Casco} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
