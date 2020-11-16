import React, {Component} from "react";
import './App.css';

class App extends Component {
  render() {
    // react classes need to expend React.Component
    // render is a lifecycle method
    // runs at a certain pt when the component is loaded
    // its required, as it is the output
    return (
      <div className="App">
        <h1>test</h1>
      </div>
    );

  }
}

export default App;
