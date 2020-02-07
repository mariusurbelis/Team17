import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import getDistance from 'geolib/es/getDistance';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cross from '../assets/cross.png'

var markers = []
var finalArray = []
var icon = Cross
// )

class HospitalsMap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedPlace: "",
			reload: false,
			marksOn: false
		}
		markers = []
		finalArray = []
		this.processProcAndProv()
	}
	processProcAndProv() {
		finalArray = []
		this.props.providers.forEach((e2) => this.props.procedures.forEach((e1) => {
			if (e1.ProviderID === e2.ID) {
				if (finalArray.indexOf(e2) === -1) {
					finalArray.push(e2)
					// console.log(this.items);
				}
			}
		}));
		// console.log("Final Array:")
		// console.log(finalArray)
		this.marcPush()
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.activeMarker !== nextState.activeMarker) {
			return true;
		}
		if (this.state.reload) {
			return true;
		}
		return true;
	}
	//lobal locations = props.hospList
	origin = this.props.hospList[0]

	findDistancesFromCoord(lcat) {
		// var lo = lcat[0]
		var gd = getDistance(this.props.hospList[0][1], lcat[1])
		//return lo + ": " + gd / 1000 + "km"
		return Math.round(gd / 1000) + "km"
		//return getDistance(locations[0][1],locations[1][1])
	}

	// printLocals() {
	// 	var arrayLength = this.props.hospList.length;
	// 	var finalProduct = "";
	// 	for (var i = 0; i < arrayLength; i++) {
	// 		finalProduct = finalProduct + this.findDistancesFromCoord(this.props.hospList[i]) + "<br>";
	// 	}
	// 	return finalProduct;
	// }

	splitProvName(name) {
		var fName = ''
		var sName = name.split(' ')
		for (var i = 0; i < 3; i++) {
			if (sName[i] !== undefined) {
				fName += sName[i] + ' '
			}
		}
		return fName
	}

	marcPush() {
		var lab;
		// console.log("marker 1")
		// console.log(finalArray)
		markers = []
		finalArray.forEach((e2) => {
			// console.log("marker 2")
			// console.log(e2)
			if (!this.state.markOn) {
				lab = " "
				icon = Cross
			} else {
				icon = " "
				lab = this.splitProvName(e2.ProviderName)  
				// lab= "B"
				//lab=this.findDistancesFromCoord(e2.Latitude, e2.longitude)
				//lab = this.findDistancesFromCoord({lat: e2.Latitude, lng: e2.longitude})
			}

			markers.push(<Marker
				address={e2.Address + ', ' + e2.City + ', ' + e2.State}
				position={{ lat: e2.Latitude, lng: e2.longitude }}
				onClick={this.onMarkerClick}
				label={{
					color: '#0f0f0f',
					text: lab,
					fontFamily: "Arial",
					fontSize: "16px",
					fontWeight: 'bold'
				}}
				name={e2.ProviderName}
				title={e2.ProviderName}
				hosp={e2}

				icon={{
					url: icon,
					anchor: new this.props.google.maps.Point(20, 20),
					scaledSize: new this.props.google.maps.Size(20, 20)
				}}

				 />);

		})
	}



	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		map: {}
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
		if(this.state.markOn){
			this.setState({
				markOn: false
			})
		}else{
			this.setState({
				markOn: true
			})
		}
		console.log("Click: " + this.state.markOn)
		this.marcPush()
		
		// this.processProcAndProv()
	};

	initCen() {
		return { lat: 38.2700, lng: -100.8603 }
		// if (finalArray.length > 0) {
		// 	return { lat: finalArray[0].Latitude, lng: finalArray[0].longitude }
		// } else if (this.props.location !== null) {
		// 	return this.props.location
		// } else {
		// 	return { lat: 38.2700, lng: -100.8603 }
		// }
	}

	handleZoomChanged() {
		// this.state.map.setZoom(6);
		// console.log("Fix")
	}

	iterateZoom() {
		console.log("ZOOM")
		// this.setState({
		// 	zoom: this.state.zoom+1
		// })
	}



	render() {
		return (
			<div>
				<div style={{ width: this.props.wi, height: this.props.hi }}>
					{this.processProcAndProv()}
					<Map google={this.props.google}
						onClick={this.onMapClicked}
						initialCenter={this.initCen()}
						zoom={5}
						style={{ width: this.props.wi, height: this.props.hi, backgroundColor: 'powderblue' }}
						onZoomChanged={this.handleZoomChanged()}
						ref={this.state.map}

					>


						{this.marcPush()}
						{markers}
						<InfoWindow
							boxStyle={{
								background: '#4da351',
								padding: "40px 40px 40px 40px",
								width: "252px",
								height: "40px"
							}}
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}>
							<Container>
								<Row>
									<Col style={{ fontSize: '1em' }} sm='12'>
										<b>{this.state.selectedPlace.name}</b>
									</Col>
								</Row>
								<Row>
									<Col style={{ fontSize: '0.8em' }} sm='12'>
										{this.state.selectedPlace.address}
									</Col>
								</Row>

							</Container>
						</InfoWindow>
					</Map>
				</div>
			</div>
		)
	}
}
// export class MapContainer extends React.Component { }
export default GoogleApiWrapper({
	apiKey: 'AIzaSyBUGx7RRQurAj4RxZb0NzMNtOHzcUZZpVo'
	// apiKey: ''
})(HospitalsMap);


