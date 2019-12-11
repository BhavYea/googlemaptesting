import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleMap} from 'react-google-maps';

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{lat: 28.546190, lng: 77.556213}}/>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        Hello
      </div>
    );
  }
}

export default App;
