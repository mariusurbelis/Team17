import React from 'react';
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

function Map() {
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{lat: 40.1738884, lng: -102.3810676}} />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAc9KB2GZ2TXTpDQbzRolOsIqQ6rMTG_aE&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{height: "100%"}} /> }
        containerElement={<div style={{height: "100%"}} /> }
        mapElement={<div style={{height: "100%"}} /> }
      />
    </div>
  );
}

export default App;
