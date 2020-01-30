import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProcedureList from './ProcedureList';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', procedures: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  sendData = () => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
  };

  handleChange(event) {
    this.setState({value: document.getElementById('text-field').value});
  }

  handleClick(event) {
    alert(this.state.value)
  }

  loadData() {
    this.state.procedures = this.getProcedures
  }

  getProcedures() {
    fetch('https://api.urbelis.dev/procedures?query=' + document.getElementById('text-field').value, {
      mode: 'cors',
      method: 'GET',
      headers:{
        'Access-Control-Allow-Origin':'*'
      },},).then(response => {
      if (response.ok) {
        response.json().then(json => {
          return json
        });
      }
    });
  }


  render() {

    if (this.state.procedures) {
      return (
        <label>
          {this.props.name}:
          <input type="text" id='text-field' onChange={this.handleChange} />
          <button onClick={this.loadData}>Search</button>
          {this.sendData}
          <p id='results'></p>
          <ProcedureList procedures={this.state.procedures}></ProcedureList>
        </label>
      );
    } else {
      return (
        <label>
          {this.props.name}:
          <input type="text" id='text-field' onChange={this.handleChange} />
          <button onClick={this.loadData}>Search</button>
          {this.sendData}
          <p id='results'></p>
        </label>
      );
    }

    
  }
}

ReactDOM.render(<SearchBar />, document.getElementById('root'));

export default SearchBar
