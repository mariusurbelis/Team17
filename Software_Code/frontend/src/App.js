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
import { CityBanner } from './components/CityBanner';

import ProcedureList from './components/ProcedureList';
import HospitalsMap from './components/HospitalsMap'
import { HospitalsSelection } from './components/HospitalsSelection';
import SearchBar from './components/SearchBar';

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewSearch from './components/NewSearch';


var locations = new Array(
    ["Dundee", { lat: 56.462002, lng: -2.970700 }],
    ["Dunde1", { lat: 57.462002, lng: -2.970700 }],
    ["Dunde2", { lat: 58.462002, lng: -2.970700 }],
    ["Dunde3", { lat: 59.462002, lng: -2.970700 }],
    ["Dunde4", { lat: 60.462002, lng: -2.970700 }],
)

var addresses = new Array(
    ["8 dundee street, dundee, dundee"],
    ["cringe past cringe on the clock"],
    [""],
    [""],
    [""]
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
            providers: [],
            providersLoaded: false,
            query: '',
            loading: false,
            initial: false,
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


    getProviders = () => {
        fetch('https://api.urbelis.dev/providers', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(response => {
            if (response.ok) {
                response.json().then(data => this.setState({ 'providers': data }))
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
                                <Route exact path="/" component={CityBanner} />
                            </Switch>
                        </Router>
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
            if (!this.state.providersLoaded) {
                this.getProviders()
                this.state.providersLoaded = true
            }
            return (

                <React.Fragment>

                    <div className={'container-fluid'}>
                        <Row style={{ 'background': '#aaaaaa' }} className={''}>

                            <Col style={{width: '100%'}} sm='12'>
                                <NewSearch home={false} />
                            </Col>

                        </Row>

                        <Row >
                            <div style={{ height: '85vh' }} className={'col-3 p-3 overflow-auto'}>
                                <ProcedureList procedures={this.state.procedures}></ProcedureList>
                                {/* {console.log(this.state.procedures)} */}
                                {console.log(this.state.providers)}
                            </div>

                            <div className={'col-9 m-0 p-0'} style={{ 'background': '#eeaaaa' }}>
                                <HospitalsMap hospList={locations} wi={"74vw"} hi={"90vh"} addresses={addresses}
                                    procedures={this.state.procedures} providers={this.state.providers} />
                            </div>
                        </Row>

                    </div>
                </React.Fragment>
            );
        }
    }
}

export default App;