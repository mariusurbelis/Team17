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

  getProcedures = () => {
    fetch('https://api.urbelis.dev/procedures?query=' + document.getElementById('text-field').value, {
      mode: 'cors',
      method: 'GET',
      headers:{
        'Access-Control-Allow-Origin':'*'
      },},).then(response => {
      if (response.ok) {
        response.json().then(data => this.setState({ 'procedures': data }))
      }
    });
  }


  render() {

    if (this.state.procedures) {
      return (
        <div className={'container'}>
          <div className={'row mt-2 mb-2'}>
            <div className={'col-12'}>
              <h2>Search for a procedure</h2>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-8'}>
              {this.props.name}
            </div>
          </div>
          <div className={'row'}>
          <div className={'col-8'}>
              <input type="text" className={'form-control'} id='text-field' onChange={this.handleChange} />
            </div>
            <div className={'col-4'}>
              <button className={'btn btn-info'} onClick={this.getProcedures}>Search</button>
            </div>
          </div>
          <div className={'row mt-2'}>
            <div className={'col-12'}>
              <ProcedureList procedures={this.state.procedures}></ProcedureList>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={'container'}>
          <div className={'row mt-2 mb-2'}>
            <div className={'col-12'}>
              <h2>Search for a procedure</h2>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-8'}>
              {this.props.name}
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-8'}>
              <input type="text" className={'form-control'} id='text-field' onChange={this.handleChange} />
            </div>
            <div className={'col-4'}>
              <button className={'btn btn-info'} onClick={this.getProcedures}>Search</button>
            </div>
            <p id='results'></p>
          </div>
        </div>
      );
    }

    
  }
}

ReactDOM.render(<SearchBar />, document.getElementById('root'));

export default SearchBar
