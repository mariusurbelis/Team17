import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import getDistance from 'geolib/es/getDistance';

// var origin = 
//var origin = ["Dundee", { lat: 56.462002, lng: -2.970700 }]
var markers = []
// var locations = new Array(
// ["Dundee", { lat: 56.462002, lng: -2.970700 }],
// ["Dunde1", { lat: 57.462002, lng: -2.970700 }],
// ["Dunde2", { lat: 58.462002, lng: -2.970700 }],
// ["Dunde3", { lat: 59.462002, lng: -2.970700 }],
// ["Dunde4", { lat: 60.462002, lng: -2.970700 }],
// )

class HospitalsMap extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if(this.state.activeMarker != nextState.activeMarker){
			return true;
		}
		return false;
	  }
	//lobal locations = props.hospList
	origin = this.props.hospList[0]

	findDistancesFromCoord(lcat) {
		var lo = lcat[0]
		var gd = getDistance(this.props.hospList[0][1], lcat[1])
		//return lo + ": " + gd / 1000 + "km"
		return Math.round(gd / 1000) + "km"
		//return getDistance(locations[0][1],locations[1][1])
	}

	printLocals() {
		var arrayLength = this.props.hospList.length;
		var finalProduct = "";
		for (var i = 0; i < arrayLength; i++) {
			finalProduct = finalProduct + this.findDistancesFromCoord(this.props.hospList[i]) + "<br>";
		}
		return finalProduct;
	}

	marcPush() {
		//markers.push(<Marker
		//	position={origin[1]}
		//	name={origin[0]} />);

		var arrayLength = this.props.hospList.length;
		for (var i = 0; i < arrayLength; i++) {

			markers.push(<Marker
				position={this.props.hospList[i][1]}
				onClick={this.onMarkerClick}
				label={this.findDistancesFromCoord(this.props.hospList[i])}
				name={this.props.hospList[i][0]}
				title={this.props.hospList[i][0]} />);
		}
	}

	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};

	render() {
		return (
			<>
				<div style={{width: this.props.wi, height: this.props.hi }}>
					<Map google={this.props.google}
						onClick={this.onMapClicked}
						initialCenter={this.props.hospList[0][1]}
						zoom={11}
						style={{width: this.props.wi, height: this.props.hi, backgroundColor: 'powderblue'}}
					>
						{this.marcPush()}
						{markers}
						<InfoWindow
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}>
							<div>
								<h1>{this.state.selectedPlace.name}</h1>
							</div>
						</InfoWindow>
					</Map>
				</div>
			</>
		)
	}
}
// export class MapContainer extends React.Component { }
export default GoogleApiWrapper({
	// apiKey: 'AIzaSyBUGx7RRQurAj4RxZb0NzMNtOHzcUZZpVo'
	apiKey: ''
})(HospitalsMap);


