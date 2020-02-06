import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// These are for page navigation, components change depending page..
import { Home } from './Home';
import { About } from './About';

// These are for each UI component
import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';
import { LowerLayout } from './components/LowerLayout';
import { Footer } from './components/Footer';
import { CityBanner } from './components/CityBanner';

import ProcedureList from './components/ProcedureList';
import ProcedureIDList from './components/ProceduresIDList';

import HospitalsMap from './components/HospitalsMap'

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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            procedures: [],
            proceduresid: [],
            proceduresLoaded: false,
            providers: [],
            providersLoaded: false,
            proceduresidLoaded: false,
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

    getProceduresID = () => {
        fetch('https://api.urbelis.dev/proceduresbyid?id=' + this.state.searchMain, {
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
        this.setState({ initial: false })
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
            if (!this.state.proceduresLoaded && this.state.selectedOption === "procName") {
                this.getProcedures()
                this.setState({ proceduresLoaded: true })
            }
            else if(!this.state.proceduresidLoaded && this.state.selectedOption === "procCode"){
                this.getProceduresID()
                this.setState({proceduresidLoaded: true})
            }
            if (!this.state.providersLoaded) {
                this.getProviders()
                this.state.providersLoaded = true
            }
            return (

                <React.Fragment>

                    <div className={'container-fluid'}>
                        <Row className={''}>

                            <Col style={{width: '100%'}} sm='12'>
                                <NewSearch home={false} />
                            </Col>

                        </Row>

                        <Row >
                            <div style={{ height: '80vh' }} className={'col-3 p-3 overflow-auto'}>
                                <ProcedureList procedures={this.state.procedures}></ProcedureList>
                            </div>

                            <div className={'col-9 m-0 p-0 pr-1'}>
                                <HospitalsMap hospList={locations} wi={"99%"} hi={"100%"} addresses={addresses}
                                    procedures={this.state.procedures} providers={this.state.providers} location={null} />
                            </div>
                        </Row>

                    </div>

                </React.Fragment>
            );
        }
    }
}

export default App;