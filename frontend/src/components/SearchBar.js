import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

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




  render() {
    return (
      
        <label>
          {this.props.name}:
          <input type="text" id='text-field' onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search</button>
          {this.sendData}
        </label>
    );
  }
}

ReactDOM.render(<SearchBar />, document.getElementById('root'));

export default SearchBar
