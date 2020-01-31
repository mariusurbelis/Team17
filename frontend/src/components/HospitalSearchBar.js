import { default as React} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import HospitalSelectionPanel from './HospitalSelectionPanel';


const state = "MO"
const startLocation = {lat: 38.6545, lng: -90.3117}
const stateLetters= [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

const Styles = styled.div`
    h1{
        color: grey;
    }

    .PageTitle{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    hr{
        border: 1px solid grey;

    }
`;


class HospitalSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', sub:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({sub: true});
    //alert('A name was submitted: ' + this.state.value);
    
    //event.preventDefault();
  }

  render() {
    if(this.state.sub==true && stateLetters.indexOf(this.state.value) > -1){
     //reactDOM.unmountComponentAtNode(document.getElementById('));
     //ReactDOM.unmountComponentAtNode(document.getElementById(''));
      return(

        <Styles>
          <p>Results For: {this.state.value}</p>
        <Row>
            <Col>
            <HospitalSelectionPanel startLocation={startLocation} stater={this.state.value} left={true}/> 
            </Col>
            <Col>
              <HospitalSelectionPanel left={false}/>
                {/* <p>Loading...</p> */}
            </Col>
        </Row>
    </Styles>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your State Letters (e.g. TX) 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default HospitalSearchBar