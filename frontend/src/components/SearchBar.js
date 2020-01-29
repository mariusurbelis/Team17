import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { HospitalName: '' };
  }
  ChangeHandler = (event) => {
    this.setState({HospitalName: event.target.value});
  }
  render() {
    return (
      <form>
      <h2>Enter a Hospital Provider:</h2>
      <p>You searched for: {this.state.HospitalName}</p>
      <input
        type='text'
        onChange={this.ChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<SearchBar />, document.getElementById('root'));

export default SearchBar
