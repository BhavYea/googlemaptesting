import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 28.546190, lng: 77.556213 }}
  />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

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

        <WrappedMap 
          GoogleMmapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: "100%"}} />}
          containerElement={<div style={{ height: "100%"}} />}
          mapElement={<div style={{ height: "100%"}} />}
        />
      </div>
    );
  }
}

export default App;
