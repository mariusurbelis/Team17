import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';



const Styles = styled.div`

    --bg: #ffffffee;
    --fg: #424242;
    --bd: #BDBDBD;

    //border-radius: 14px;
    background: #ffffff40;
    width: auto;
    //margin: 50px 0px 80px 0px;
    padding 30px;

    // .row {
    //     margin: '0px 0px 10px 0px', 
    //     width: auto;
    //     background: blue;

    // }

    .smallLabel {
        color: grey;
        font-weight: bold;
        font-size: small;
        padding-left: 4px;
    }

    .label {
        color: grey;
        height: auto;
        margin: 10px 0 0 0;
        width: 15%;
    }

    .radio{
        width: 3%;
        margin: 17px 0px 0px 0px;   
    }

    .mainSearch {
        width: 100%;
        height: 3em;
        background: var(--bg);
        color: var(--fg);
        border: 3px solid var(--bd);
        border-radius: 9px;
        border-width: 2px;
        padding: 12px;
    }  
    
    .locSearch {
        width: 100%;
        height: 3em;
        border-width: 2px;
        border-radius: 9px;
        background: var(--bg);
        cursor: pointer;
    }

    .radSearch {
        width: 100%;
        background: var(--bg);
        height: 3em;
        color: var(--fg);
        border: 3px solid var(--bd);
        border-width: 2px;
        border-radius: 9px;
        padding: 12px;
    }

    .butn {
        width: 100%;
        background: var(--bg);
        color: var(--fg);
        border: 2px solid var(--bd);
        padding-bottom: 10px;
        padding-top: 10px;
        margin: 0px;
        margin-top: 5px;
        border-radius: 9px;
    }  
`;

var hStyle;

export default class NewSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchMain: "",
            searchLocation: "",
            searchRadius: "",
            selectedOption: "",
        }
    }

    changeHStyle() {
        if (this.props.home === true) {
            hStyle = {
                margin: '50px 0px 80px 0px',
                width: "100%",
                borderRadius: '14px',
            }
        } else {
            hStyle = {
                margin: '0px 0px 0px 0px',
                width: "100%",
                borderRadius: '0px'
            }
        }
    }

    sendData = () => {
        this.props.parentCallback(this.state);
    }

    handleSubmit = (event) => {
        console.log('Submit handling')
        event.preventDefault();
        this.sendData()
    }

    updateMainSelectedOption() {
        if (isNaN(this.state.searchMain)) {
            this.setState({
                selectedOption: 'procName',
            });
        } else {
            this.setState({
                selectedOption: 'procCode',
            });
        }
    }

    updateMainSearch(event) {
        this.updateMainSelectedOption()
        this.setState({ searchMain: event.target.value })
    }
    updateLocSearch(event) {
        this.updateMainSelectedOption()
        this.setState({ searchLocation: event.target.value })
    }
    updateRadSearch(event) {
        this.updateMainSelectedOption()
        this.setState({ searchRadius: event.target.value })
    }
    updateSearch(event) {
        this.updateMainSelectedOption()
        this.setState({ search: event.target.value })
    }

    render() {
        this.changeHStyle()
        return (
            <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
                <Styles style={hStyle}>
                    {/* <label className="label">Search By: </label> */}
                    <Row>

                    </Row>
                    <Row>

                        <Col sm='6'>
                            <label className="smallLabel">Search for procedure</label>
                        </Col>

                        <Col sm='4'>
                            <label className="smallLabel">State</label>
                        </Col>

                        <Col sm='2'>
                            <label className="smallLabel">Search Radius (KM)</label>
                        </Col>

                    </Row>

                    <Row>

                        <Col sm='6'>
                            <input className="mainSearch"
                                placeholder="Procedure name or DRG code"
                                type="text"
                                onChange={this.updateMainSearch.bind(this)} />
                        </Col>

                        <Col sm='4' className={'p-0'}>
                            <div class="form-group m-0">
                                <div class="col-sm-12" style={{height: '3em'}}>
                                    <select class="form-control locSearch" style={{height: '100%'}} id="state" name="state" onChange={this.updateLocSearch.bind(this)}>
                                        <option value="">N/A</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="IA">Iowa</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MD">Maryland</option>
                                        <option value="ME">Maine</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MT">Montana</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NY">New York</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VA">Virginia</option>
                                        <option value="VT">Vermont</option>
                                        <option value="WA">Washington</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        <Col sm='2'>
                            <input className="radSearch"
                                type="text"
                                placeholder="Distance"
                                onChange={this.updateRadSearch.bind(this)} />
                        </Col>

                    </Row>
                    <Row>
                        <Col sm='12' className={'text-right'}>
                            <label></label>
                            <input className={'butn'}
                                type="submit"
                                value="Submit"
                                onClick={this.handleSubmit} />
                        </Col>
                    </Row>
                </Styles>
            </ form>
        )
    }
}

// {
//     <Col>
//         <input className="subSearch"
//             type="text"
//             value={this.state.search}
//             onChange={this.updateSearch.bind(this)} />
//     </Col>
//         <Col>
//             <input className="subSearch"
//                 type="text"
//                 value={this.state.search}
//                 onChange={this.updateSearch.bind(this)} />
//         </Col> 
// }