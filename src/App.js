// root > src > App.js

import React, {Component} from "react";
import './App.css';
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {


    // react classes need to expend React.Component
    // render is a lifecycle method
    // runs at a certain pt when the component is loaded
    // its required, as it is the output
    return (
      <nav className="navbar bg-primary">
        <h1>
          <Navbar title="Github Finder" icon="fab fa-github" />
        </h1>
      </nav>
    );

  }
}

export default App;
