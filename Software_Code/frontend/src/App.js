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


// fetch('https://api.urbelis.dev/procedure', {mode: 'no-cors', method: 'GET'})
//   .then((response) => {
//     // return response.json();
//     return response.text();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });

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
            query: '',
            loading: false,
            initial: false
        }
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
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </Router>
                    </ColorLayout>

                    {/* Main page area, put your components in here <3 - LowerLayout is just a react container to keep things neat */}
                    {/* <Route path = "PAGE-NAME(Page you want component to appear on)" component = {"NAME-OF-COMPONENT,NAME-OF-COMPONENT-2, etc etc"}/> */}
                    <LowerLayout>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={HomepageSearch} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </Router>
                        {/* <div style={{'margin-top':'1em'}} className="sweet-loading">
              <FadeLoader
                css={override}
                size={200}
                //size={"150px"} this also works
                color={"#4287f5"}
                loading={this.state.loading}
              />
            </div> */}
                        <Row>
                            <Col><h1 class="homeHeading">A smarter way to find affordable healthcare</h1></Col>
                            <Col><Image src={City} align="right" /></Col>
                            {/* Remove Linus \/\/\/    Uncomment the image /\/\/\ */}
                            {/*<Col><Image style={{'width':'300px'}} src={'https://kwize.com/pics/Linus-Torvalds-quote-about-talking-1c9797.jpg'} align="right"/></Col>*/}
                        </Row>
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
                        {/* <div style={{'margin-top':'1em'}} className="sweet-loading">
                <FadeLoader
                  css={override}
                  size={200}
                  //size={"150px"} this also works
                  color={"#4287f5"}
                  loading={this.state.loading}
                />
              </div> */}
                        <Row>
                            <Col><h1 class="homeHeading">A smarter way to find affordable healthcare</h1></Col>
                            <Col><Image src={City} align="right" /></Col>
                            {/* Remove Linus \/\/\/    Uncomment the image /\/\/\ */}
                            {/*<Col><Image style={{'width':'300px'}} src={'https://kwize.com/pics/Linus-Torvalds-quote-about-talking-1c9797.jpg'} align="right"/></Col>*/}
                        </Row>
                    </LowerLayout>

                    {/* Its kinda obvious what this bit  does..*/}
                    <Footer>
                    </Footer>

                </React.Fragment>

            );
        } else {
            return (
                <React.Fragment>
                    <div className={'container-fluid'}>
                        <Row style={{ 'background': '#aaaaaa' }} className={'align-items-center'} style={{width: 'auto'}}>
                           
                                <NewSearch home={false}/>
                                
                           
                        </Row>

                        <Row style={{ height: '90vh' }}>
                            <div style={{ 'background': '#aaeeaa' }} className={'col-2'}>
                                <p>Place for the cards</p>
                            </div>

                            <div style={{ 'background': '#eeaaaa' }} className={'col-10'}>
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