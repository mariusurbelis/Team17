import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Hospitals } from './Hospitals';
import { Procedures } from './Procedures';
import { About } from './About';
import { NoMatch } from './NoMatch';

import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component{
  render(){
    return(
      <React.Fragment>
          <ColorLayout>
          <NavigationBar>
          </NavigationBar>
            <Router>
              <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route path = "/hospitals" component = {Hospitals}/>
                <Route path = "/procedures" component = {Procedures}/>
                <Route path = "/about" component = {About}/>
                <Route component = {NoMatch}/>
              </Switch>
            </Router>
          </ColorLayout>
      </React.Fragment>
    );
  }
}

export default App;