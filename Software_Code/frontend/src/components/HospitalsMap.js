import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import getDistance from 'geolib/es/getDistance';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// var origin = 
//var origin = ["Dundee", { lat: 56.462002, lng: -2.970700 }]
var markers = []
var finalArray = []
// var locations = new Array(
// ["Dundee", { lat: 56.462002, lng: -2.970700 }],
// ["Dunde1", { lat: 57.462002, lng: -2.970700 }],
// ["Dunde2", { lat: 58.462002, lng: -2.970700 }],
// ["Dunde3", { lat: 59.462002, lng: -2.970700 }],
// ["Dunde4", { lat: 60.462002, lng: -2.970700 }],
// )


class HospitalsMap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedPlace: "",
			reload: false
		}
		this.processProcAndProv()
	}
	processProcAndProv() {
		this.props.providers.forEach((e2) => this.props.procedures.forEach((e1) => {
			if (e1.ProviderID === e2.ID) {
				if (finalArray.indexOf(e2) === -1) {
					finalArray.push(e2)
					console.log(this.items);
				}
			}
		}));
		console.log("Final Array:")
		console.log(finalArray)
		this.marcPush()
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.activeMarker != nextState.activeMarker) {
			return true;
		}
		if (this.state.reload){
			return true;
		}
		return true;
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
		var lab;
		console.log("marker 1")
		console.log(finalArray)
		finalArray.forEach((e2) => {
			console.log("marker 2")
			console.log(e2)
			if (this.props.location !== null){
				lab = "You are here"
			}else{
				lab = e2.ProviderName.split(' ')[0]+ ' ' + e2.ProviderName.split(' ')[1]
				//lab=this.findDistancesFromCoord(e2.Latitude, e2.longitude)
				//lab = this.findDistancesFromCoord({lat: e2.Latitude, lng: e2.longitude})
			}
				markers.push(<Marker
					address={e2.Address}
					position={{lat: e2.Latitude, lng: e2.longitude}}
					onClick={this.onMarkerClick}
					label={lab}
					name={e2.ProviderName}
					title={e2.ProviderName} />);
			
		})
	}
	// markers.push(<Marker
	// 	position={origin[1]}
	// 	name={origin[0]} />);
	// var arrayLength = this.props.hospList.length;
	// 	for (var i = 0; i < arrayLength; i++) {
	// 		if (i == 0) {
	// 			markers.push(<Marker
	// 				address={this.props.addresses[i]}
	// 				position={this.props.hospList[i][1]}
	// 				onClick={this.onMarkerClick}
	// 				label={"You are Here"}
	// 				name={this.props.hospList[i][0]}
	// 				title={this.props.hospList[i][0]} />);
	// 		} else {
	// 			markers.push(<Marker
	// 				address={this.props.addresses[i]}
	// 				position={this.props.hospList[i][1]}
	// 				onClick={this.onMarkerClick}
	// 				label={this.findDistancesFromCoord(this.props.hospList[i])}
	// 				name={this.props.hospList[i][0]}
	// 				title={this.props.hospList[i][0]} />);
	// 		}
	// 	}
	// }


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
		this.processProcAndProv()
	};

	render() {
		return (
			<div>
				<div style={{ width: this.props.wi, height: this.props.hi }}>
					<Map google={this.props.google}
						onClick={this.onMapClicked}
						initialCenter={this.props.hospList[0][1]}
						zoom={4}
						style={{ width: this.props.wi, height: this.props.hi, backgroundColor: 'powderblue' }}
					>
						{this.processProcAndProv()}
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
							<Row style={{ width: '30vh', padding: '20px'}}>
								<h4 style={{ margin: 'auto' }}>
									{this.state.selectedPlace.name}
								</h4>
							</Row>
							<hr />
							<Row style={{ width: 'auto', padding: '20px'}}>
								<h5>{this.state.selectedPlace.address} ahahah</h5>
							</Row>
							<Row style={{ width: 'auto', padding: '20px'}}>

								<div >
									<button 
									onClick={console.log("Yee")}>See Details</button>
								</div>
							</Row>

						</InfoWindow>
					</Map>
				</div>
			</div>
		)
	}
}
// export class MapContainer extends React.Component { }
export default GoogleApiWrapper({
	// apiKey: 'AIzaSyBUGx7RRQurAj4RxZb0NzMNtOHzcUZZpVo'
	apiKey: ''
})(HospitalsMap);


