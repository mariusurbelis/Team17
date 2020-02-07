import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

// These are for each UI component
import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';
import { LowerLayout } from './components/LowerLayout';
import { Footer } from './components/Footer';
import { CityBanner } from './components/CityBanner';

import ProcedureList from './components/ProcedureList';
// import ProcedureIDList from './components/ProceduresIDList';

import HospitalsMap from './components/HospitalsMap'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewSearch from './components/NewSearch';

const override = css`
    display: block;
    margin: 200px auto;
    background: white;
    border-color: red;
`;

var locations = ""

var addresses = ""

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
            loading: true,
            initial: true,
            searchMain: "",
            searchLocation: "",
            searchRadius: "",
            selectedOption: "procName",
            proceduresFiltered: false,
            shortestLoc: null,
            min: "0",
            max: "999999999"
        }
    }

    getProcedures = () => {
        fetch('https://api.urbelis.dev/proceduresminmax?query=' + this.state.searchMain + '&zip=' + this.state.searchLocation + '&min=' + this.state.min + '&max=' + this.state.max, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(response => {
            if (response.ok) {
                response.json().then(data => this.setState({ 'procedures': data }))
            }
            this.filterProcs()
        });
    }

    getProceduresID = () => {
        console.log('https://api.urbelis.dev/proceduresbyid?id=' + this.state.searchMain + '&zip=' + this.state.searchLocation + '&min=' + this.state.min + '&max=' + this.state.max)
        fetch('https://api.urbelis.dev/proceduresbyidminmax?id=' + this.state.searchMain + '&zip=' + this.state.searchLocation + '&min=' + this.state.min + '&max=' + this.state.max, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(response => {
            if (response.ok) {
                response.json().then(data => this.setState({ 'procedures': data }))
                this.filterProcs()
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
                response.json().then(data => this.setState({ 'providers': data, 'loading': false }))
                this.filterProcs()
            }
            
        });
    }

    callbackFunction2 = (childData) => {
        console.log(childData)
        this.setState({
            searchMain: childData.searchMain,
            searchLocation: childData.searchLocation,
            searchRadius: childData.searchRadius,
            selectedOption: childData.selectedOption,
            min: childData.searchMin,
            max: childData.searchMax,
        })

        // alert('APP.js: ' + this.state.selectedOption)
        this.setState({ proceduresLoaded: false, proceduresidLoaded: false, providersLoaded: false, initial: false, proceduresFiltered: false, procedures: []})

        console.log('Initial: ' + this.state.initial)

        // this.getProcedures()
    }

    filterProcs() {
        console.log("oldProcs")
        console.log(this.state.procedures)
        //     return false

        var shortestDistance=10000;
        var closestLoc;
        var rad = parseInt(this.state.searchRadius)
        console.log("rad")
        console.log(rad)
        if(isNaN(rad)){
            rad = 100
        }
        var newProcs = []

        this.state.procedures.forEach((proc) => {
                var procDis = parseInt(proc.distance) 
                 if(procDis < rad){
                     newProcs.push(proc)
                     if(procDis<shortestDistance){
                         closestLoc = {lat: proc.Latitude, lng: proc.longitude}
                         shortestDistance = procDis
                     }
                 }
        })

        this.setState({procedures: newProcs,
        shortestLoc: closestLoc})

        // this.state.procedures = newProcs;
        // this.state.shortestLoc = closestLoc;        

        console.log("newProcs / state.procs")
        console.log(newProcs)
        console.log(this.state.procedures)
        // this.setState({procedures: newProcs})
        // console.log(this.state.procedures)
    }

    render() {

        if (this.state.initial) {
            return (
                <React.Fragment>
                    {/* Header Area - Essentially the Navbar and color gradient components*/}
                    <ColorLayout>
                        <NavigationBar>
                        </NavigationBar>

                        <NewSearch home={true} parentCallback={this.callbackFunction2} />
                        <Row style={{ background: "#32a852", }}></Row>
                    </ColorLayout>

                    {/* Main page area, put your components in here <3 - LowerLayout is just a react container to keep things neat */}
                    {/* <Route path = "PAGE-NAME(Page you want component to appear on)" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}


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
            
            if (!this.state.proceduresFiltered && this.state.procedures.length>0){
                this.filterProcs()
                this.setState({proceduresFiltered: true})
            }

            if (!this.state.proceduresLoaded && this.state.selectedOption === "procName") {
                this.getProcedures()
                this.setState({ proceduresLoaded: true })
                this.filterProcs()
            }
            else if (!this.state.proceduresidLoaded && this.state.selectedOption === "procCode") {
                this.getProceduresID()
                this.setState({ proceduresidLoaded: true })
                this.filterProcs()
            }
            if (!this.state.providersLoaded) {
                this.getProviders()
                this.setState({providersLoaded: true})
                
            }

            if (!this.state.proceduresFiltered && this.state.procedures.length>0){
                this.filterProcs()
                this.setState({ proceduresFiltered: true })
            }
            
            return (

                <React.Fragment>
                    

                    <div className={'container-fluid'}>

                        <Row className={''}>

                            <Col sm='12' >
                                <NewSearch home={false} parentCallback={this.callbackFunction2} />
                            </Col>

                        </Row>

                        <Row >
                            <div style={{ height: '80vh' }} className={'col-3 p-3 overflow-auto'}>
                                <ProcedureList procedures={this.state.procedures}></ProcedureList>

                                <div className="sweet-loading">
                                    <FadeLoader
                                        css={override}
                                        size={200}
                                        color={"#123abc"}
                                        loading={this.state.loading}
                                    />
                                </div>

                            </div>

                            <div className={'col-9 m-0 p-0 pr-1'}>
                                {/* {this.getProviders()} */}
                                <HospitalsMap hospList={locations} wi={"99%"} hi={"100%"} addresses={addresses}
                                    procedures={this.state.procedures} providers={this.state.providers} location={this.state.shortestLoc} />
                            </div>
                        </Row>

                    </div>

                </React.Fragment>
            );
        }
    }
}

export default App;