import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// These are for page navigation
import { Home } from './Home';
// import { Hospitals } from './Hospitals';
import { Procedures } from './Procedures';
import { About } from './About';
import { NoMatch } from './NoMatch';

// These are for each ui component
import { Version } from './components/Version';
import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';
import { HomepageSearch } from './components/HomepageSearch';
import { LowerLayout } from './components/LowerLayout';
import { Footer } from './components/Footer';

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
          <Version>
          </Version>
          <LowerLayout>
            <HomepageSearch>
              
            </HomepageSearch>
          </LowerLayout>
        <Footer>
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;