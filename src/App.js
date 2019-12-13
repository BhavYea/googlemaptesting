import React, { Component } from 'react';
import './App.css';
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



// const MyMapComponent = (props) => (
//   <GoogleMap
//     defaultZoom={10}
//     defaultCenter={{ lat: 28.546190, lng: 77.556213 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 28.546190, lng: 77.556213 }} />}
//   </GoogleMap>
// )

// const WrappedMap = withScriptjs(withGoogleMap(Map))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{ lat: 28.546190, lng: 77.556213 }}>


          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
      );
    }
  }
  
  // export default App;
  
export default GoogleApiWrapper({
          apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
      })(App)
