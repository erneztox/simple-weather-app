import React, { Component } from 'react';
import Nav from './nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Weather App</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
