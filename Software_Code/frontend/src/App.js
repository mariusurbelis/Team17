import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// These are for page navigation, components change depending page..
import { Home } from './Home';
//import { Hospitals } from './Hospitals';
import { Procedures } from './Procedures';
import { About } from './About';
import { NoMatch } from './NoMatch';

// These are for each UI component
import { Version } from './components/Version';
import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';
import { HomepageSearch } from './components/HomepageSearch';
import { LowerLayout } from './components/LowerLayout';
import { Footer } from './components/Footer';

import ProcedureList from './components/ProcedureList';
import HospitalsMap from './components/HospitalsMap'
import { HospitalsSelection } from './components/HospitalsSelection';
import SearchBar from './components/SearchBar';

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import City from './assets/city.png';
import NewSearch from './components/NewSearch';

var locations = new Array(
    ["Dundee", { lat: 56.462002, lng: -2.970700 }],
    ["Dunde1", { lat: 57.462002, lng: -2.970700 }],
    ["Dunde2", { lat: 58.462002, lng: -2.970700 }],
    ["Dunde3", { lat: 59.462002, lng: -2.970700 }],
    ["Dunde4", { lat: 60.462002, lng: -2.970700 }],
)

// Used for a loading spinner
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            procedures: [],
            proceduresLoaded: false,
            query: '',
            loading: false,
            initial: true,
            searchMain: "",
            searchLocation: "",
            searchRadius: "",
            selectedOption: false
        }
    }

    getProcedures = () => {
        fetch('https://api.urbelis.dev/procedures?query=' + this.state.searchMain, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(response => {
            if (response.ok) {
                response.json().then(data => this.setState({ 'procedures': data }))
            }
        });
    }

    callbackFunction2 = (childData) => {
        console.log(childData)
        this.setState({
            searchMain: childData.searchMain,
            searchLocation: childData.searchLocation,
            searchRadius: childData.searchRadius,
            selectedOption: childData.selectedOption
        })
        this.state.initial = false
    }

    render() {

        if (this.state.initial) {
            return (

                <React.Fragment>

                    {/* Header Area - Essentially the Navbar and color gradient components*/}
                    <ColorLayout>
                        <NavigationBar>
                        </NavigationBar>
                        <Router>
                            <Switch>
                                {/* This is for the homepage city picture and heading text 'smarter healthcare etc' */}
                                {/* <Route path = "PAGE-NAME" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}
                                {/* <Route exact path="/" component={Home} /> */}
                                <Home parentCallback={this.callbackFunction2} />
                            </Switch>
                        </Router>
                    </ColorLayout>

                    {/* Main page area, put your components in here <3 - LowerLayout is just a react container to keep things neat */}
                    {/* <Route path = "PAGE-NAME(Page you want component to appear on)" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}
                    <LowerLayout>
                        <Router>
                            <Switch>
                                <Route path="/about" component={About} />
                            </Switch>
                        </Router>
                    </LowerLayout>

                    {/* Main page area, put your components in here <3 - LowerLayout is just a react container to keep things neat */}
                    {/* <Route path = "PAGE-NAME(Page you want component to appear on)" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}
                    <LowerLayout>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={HomepageSearch} />
                                <Route path="/about" component={About} />
                                <Route path="/hospitals" component={HospitalsSelection} />
                                <Route path="/procedures" component={SearchBar} />
                            </Switch>
                        </Router>
                        <Row>
                            <Col><h1 class="homeHeading">A smarter way to find affordable healthcare</h1></Col>
                            <Col><Image src={City} align="right" /></Col>
                        </Row>
                    </LowerLayout>

                    {/* Its kinda obvious what this bit  does..*/}
                    <Footer>
                    </Footer>

                </React.Fragment>

            );
        } else {
            if (!this.state.proceduresLoaded) {
                this.getProcedures()
                this.state.proceduresLoaded = true
            }
            return (

                <React.Fragment>
                    <ul>
                        <li >{this.state.searchMain}</li>
                        <li >{this.state.searchLocation}</li>
                        <li >{this.state.searchRadius}</li>
                        <li >{this.state.selectedOption}</li>
                    </ul>
                    <div className={'container-fluid'}>
                        <Row style={{ 'background': '#aaaaaa' }} className={'align-items-center'} style={{ width: 'auto' }}>

                            <NewSearch home={false} />


                        </Row>

                        <Row style={{ height: '90vh' }}>
                            <div className={'col-3 p-3'}>
                                <ProcedureList procedures={this.state.procedures}></ProcedureList>
                            </div>

                            <div style={{ 'background': '#eeaaaa' }} className={'col-9'}>
                                <p>Map</p>
                            </div>
                        </Row>

                    </div>
                </React.Fragment>
            );
        }
    }
}

export default App;