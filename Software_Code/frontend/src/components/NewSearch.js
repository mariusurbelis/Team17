import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import styled from 'styled-components';



const Styles = styled.div`

    --bg: F5F5F%;
    --fg: #424242;
    --bd: #BDBDBD;

    //border-radius: 14px;
    background: #ffffff65;
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
        width: 60%;
        background: var(--bg);
        color: var(--fg);
        border: 3px solid var(--bd);
        border-width: 2px 1px 2px 2px;
        padding: 12px;
        // padding-top: 17px;
        // padding-right: 7px;
        border-top-left-radius: 9px;
        border-bottom-left-radius: 9px;
    }  
    
    .locSearch {
        width: 25%;
        background: var(--bg);
        color: var(--fg);
        border: 2px solid var(--bd);
        border-width: 2px 0px 2px 0px;
        padding: 12px;
        // padding-bottom: 17px;
        // padding-top: 17px;
    }
    .radSearch {
        width: 15%;
        background: var(--bg);
        color: var(--fg);
        border: 3px solid var(--bd);
        border-width: 2px 2px 2px 1px;
        padding: 12px;
        // padding-bottom: 17px;
        // padding-top: 17px;
        border-top-right-radius: 9px;
        border-bottom-right-radius: 8px;
    }

    .butn {
        width: 20%;
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
            selectedOption: "WTF",
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

        // this.setState({ searchMain: "Submitted" });
    }

    updateMainSelectedOption() {
        if (isNaN(this.state.searchMain)) {
            console.log('Input as procedure name detected')
            this.setState({
                selectedOption: 'procName',
            });
        } else {
            console.log('Input as procedure code detected')
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
                        <label className="smallLabel" style={{ width: '60%' }}>Search for procedure</label>
                        <label className="smallLabel" style={{ width: '25%' }}>(Optional) Enter Your City</label>
                        <label className="smallLabel" style={{ width: '15%' }}>Search Radius (KM)</label>
                    </Row>

                    <Row>
                        <input className="mainSearch"
                            placeholder="Procedure name or DRG code"
                            type="text"
                            value={this.state.searchMain}
                            onChange={this.updateMainSearch.bind(this)} />

                        <input className="locSearch"
                            placeholder="City or state"
                            type="text"
                            value={this.state.searchLocation}
                            onChange={this.updateLocSearch.bind(this)} />

                        <input className="radSearch"
                            type="text"
                            placeholder="Distance"
                            value={this.state.searchRadius}
                            onChange={this.updateRadSearch.bind(this)} />

                    </Row>
                    <Row>
                        {/* <input
                            className="radio"
                            type="radio"
                            value="procCode"
                            checked={this.state.selectedOption === "procCode"}
                            onChange={this.handleOptionChange}
                        />
                        <label className="label">Procedure Code </label>
                        <input
                            className="radio"
                            type="radio"
                            value="procName"
                            checked={this.state.selectedOption === "procName"}
                            onChange={this.handleOptionChange}
                        />
                        <label className="label">Procedure Name </label> */}

                        <label style={{ width: '44%' }}></label>
                        <input className={'butn'}
                            type="submit"
                            value="Submit"
                            onClick={this.handleSubmit} />
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