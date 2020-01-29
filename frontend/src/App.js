import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
// import { Hospitals } from './Hospitals';
import { Procedures } from './Procedures';
import { About } from './About';
import { NoMatch } from './NoMatch';

import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';

import ProcedureList from './components/ProcedureList';


// fetch('https://api.urbelis.dev/procedure', {mode: 'no-cors', method: 'GET'})
//   .then((response) => {
//     // return response.json();
//     return response.text();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      procedures: []
    }
  }

  componentDidMount() {
    fetch('https://api.urbelis.dev/procedure', {
      mode: 'cors',
      method: 'GET',
      headers:{
        'Access-Control-Allow-Origin':'*'
      },},).then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log(json)
          this.setState({ procedures: json });
        });
      }
    });
  }
  
  render(){
    return(
      <React.Fragment>
          <ColorLayout>
          <NavigationBar>
          </NavigationBar>
            <Router>
              <Switch>
                <Route exact path = "/" component = {Home}/>
                {/* <Route path = "/hospitals" component = {Hospitals}/> */}
                <Route path = "/procedures" component = {Procedures}/>
                <Route path = "/about" component = {About}/>
                <Route component = {NoMatch}/>
              </Switch>
            </Router>
          </ColorLayout>
          <div style={{'height': '60vh'}} className={'container overflow-auto'}>
            <ProcedureList procedures = {this.state.procedures} />
          </div>
      </React.Fragment>
    );
  }
}

export default App;