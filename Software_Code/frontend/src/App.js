import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// These are for page navigation, components change depending page..
import { About } from './About';

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
            loading: false,
            initial: true,
            searchMain: "",
            searchLocation: "",
            searchRadius: "",
            selectedOption: "procName",
            proceduresFiltered: false
        }
    }

    getProcedures = () => {
        fetch('https://api.urbelis.dev/procedures?query=' + this.state.searchMain + '&zip=' + this.state.searchLocation, {
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
        fetch('https://api.urbelis.dev/proceduresbyid?id=' + this.state.searchMain + '&zip=' + this.state.searchLocation, {
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
            selectedOption: childData.selectedOption,
        })
        // alert('APP.js: ' + this.state.selectedOption)
        this.setState({ proceduresLoaded: false, proceduresidLoaded: false, providersLoaded: false, initial: false, proceduresFiltered: false})

        console.log('Initial: ' + this.state.initial)

        // this.getProcedures()
    }

    filterProcs(){
        console.log("oldProcs")
        console.log(this.state.procedures)
        // if (!this.state.proceduresLoaded && !this.state.proceduresidLoaded){
        //     return false
        // }
        var rad = parseInt(this.state.searchLocation)
        if(!isNaN(rad)){
            rad = 100
        }
        var newProcs = []
        // var newProcs = JSON.parse(JSON.stringify(this.state.procedures));
        // console.log(newProcs)
        this.state.procedures.forEach((proc) => {
                 if(parseInt(proc.distance) < rad){
                     console.log("bang")
                     newProcs.push(proc)
                 }
        })
        this.setState({procedures: newProcs})
        // proceduresFiltered: true})
        console.log("newProcs")
        console.log(newProcs)
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
                // this.filterProcs()
            }
            else if (!this.state.proceduresidLoaded && this.state.selectedOption === "procCode") {
                this.getProceduresID()
                this.setState({ proceduresidLoaded: true })
                // this.filterProcs()
            }
            if (!this.state.providersLoaded) {
                this.getProviders()
                this.setState({providersLoaded: true})
                // this.filterProcs()
            }
            
            if (!this.state.proceduresFiltered && this.state.procedures.length>0){
                this.filterProcs()
                this.setState({proceduresFiltered: true})
            }
            
            return (

                <React.Fragment>

                    <div className={'container-fluid'}>
                        <Row className={''}>

                            <Col style={{ width: '100%', background: 'white' }} sm='12' >
                                <NewSearch home={false} parentCallback={this.callbackFunction2} />
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