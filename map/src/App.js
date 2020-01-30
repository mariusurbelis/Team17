import React, { Component } from 'react';
import HospitalsMap from './components/HospitalsMap'
import GoogleMapReact from 'google-maps-react';
import './App.css';

var JSONInput;

var locations = new Array(
	["Dundee", { lat: 56.462002, lng: -2.970700 }],
	["Dunde1", { lat: 57.462002, lng: -2.970700 }],
	["Dunde2", { lat: 58.462002, lng: -2.970700 }],
	["Dunde3", { lat: 59.462002, lng: -2.970700 }],
	["Dunde4", { lat: 60.462002, lng: -2.970700 }],
)

if (JSONInput) {
	//do some json stuff
}


export default function App() {
	return (
		//<div style={{ height: 600, width: 600}}>
			<div>
				<HospitalsMap hospList={locations} hi={500} wi={500}/>
				hi
				<HospitalsMap hospList={locations} hi={500} wi={500}/>
				hi
				<HospitalsMap hospList={locations} hi={500} wi={500}/>
				hi
				<HospitalsMap hospList={locations} hi={500} wi={500}/>
				hi
				<HospitalsMap hospList={locations} hi={500} wi={500}/>
				hi
				<HospitalsMap hospList={locations} hi={500} wi={500}/>
				hi
			</div>
			
		//</div>
	);
}

