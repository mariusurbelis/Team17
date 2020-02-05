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


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewSearch from './components/NewSearch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            procedures: [],
            proceduresid: [],
            proceduresLoaded: false,
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
                response.json().then(data => this.setState({ 'proceduresid': data }))
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
            return (

                <React.Fragment>
                    <ColorLayout>
                        <NavigationBar>
                        </NavigationBar>
                    </ColorLayout>

                    <div className={'container-fluid'}>
                        <Row style={{ 'background': '#aaaaaa', width: 'auto' }} className={'align-items-center'}>
                            <NewSearch home={false} />
                        </Row>

                        <Row style={{ height: '90vh' }}>
                            <Col sm={3} className={'p-3'}>
                                <ProcedureList procedures={this.state.procedures}></ProcedureList>
                                <ProcedureIDList proceduresid={this.state.proceduresid}></ProcedureIDList>
                            </Col>

                            <Col sm={9} style={{ 'background': '#eeaaaa' }}>
                                <p>Map</p>
                            </Col>
                        </Row>

                    </div>
                </React.Fragment>
            );
        }
    }
}

export default App;