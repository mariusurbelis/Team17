import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Hospitals } from './Hospitals';
import { Procedures } from './Procedures';
import { About } from './About';
import { NoMatch } from './NoMatch';

import { ColorLayout } from './components/ColorLayout';
import { NavigationBar } from './components/NavigationBar';

import ProcedureList from './components/ProcedureList';


var express = require('express');
var mysql = require('mysql');

const con = mysql.createConnection({
	host: "urbelis.dev",
	user: "adminrootusername",
	password: "adminrootpassword",
	database: "agile"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("connected!")

	con.query("SELECT * FROM GPD", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  	});
});

class App extends Component {

  state = {
    procedures: [
      {
        id: 1,
        english: 'Inner Forearm',
        korean: 'An Palmok',
        flip: false
      },
      {
        id: 2,
        english: 'Outer Forearm',
        korean: 'Bakat Palmok',
        flip: false
      },
      {
        id: 3,
        english: 'Obverse Punch',
        korean: 'Baro Jirugi',
        flip: false
      },
      {
        id: 4,
        english: 'Hand Parts',
        korean: 'Sang Bansin',
        flip: false
      },
      {
        id: 5,
        english: 'Obverse',
        korean: 'Baro',
        flip: false
      },
      {
        id: 6,
        english: 'Reverse',
        korean: 'Bandae',
        flip: false
      }
    ]
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
                <Route path = "/hospitals" component = {Hospitals}/>
                <Route path = "/procedures" component = {Procedures}/>
                <Route path = "/about" component = {About}/>
                <Route component = {NoMatch}/>
              </Switch>
            </Router>
          </ColorLayout>
          
          <ProcedureList procedures = {this.state.procedures} />

      </React.Fragment>
    );
  }
}

export default App;