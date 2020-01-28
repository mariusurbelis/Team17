import React, { Component } from 'react';
import HospitalsMap from './components/HospitalsMap'
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import './App.css';

function App() {
  return (
    <HospitalsMap />
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(HospitalsMap);
