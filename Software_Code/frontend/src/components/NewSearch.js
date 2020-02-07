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
        color: white;
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
        border: 3px solid #0E9DD9;
        border-radius: 9px;
        border-width: 2px;
        padding: 12px;
    }  
    
    .locSearch {
        width: 100%;
        height: 3em;
        padding: 1em;
        border-width: 2px;
        border: 2px solid #0E9DD9;
        border-radius: 9px;
        background: var(--bg);
        cursor: pointer;
    }

    .radSearch {
        width: 100%;
        background: var(--bg);
        height: 3em;
        color: var(--fg);
        border: 2px solid #0E9DD9;
        border-width: 2px;
        border-radius: 9px;
        padding: 12px;
    }

    .butn {
        width: 100%;
        background: var(--bg);
        color: var(--fg);
        border: 2px solid #0E9DD9;
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
            searchMin: "0",
            searchMax: "99999999999999999",
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
    updateMaxSearch(event) {
        this.updateMainSelectedOption()
        this.setState({ searchMax: event.target.value })
    }
    updateMinSearch(event) {
        this.updateMainSelectedOption()
        this.setState({ searchMin: event.target.value })
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

                        <Col sm='8'>
                            <label className="smallLabel">Search for procedure</label>
                        </Col>

                        <Col sm='2'>
                            <label className="smallLabel">ZIP code</label>
                        </Col>

                        <Col sm='2'>
                            <label className="smallLabel">Search Radius (Miles)</label>
                        </Col>

                    </Row>

                    <Row>

                        <Col sm='4'>
                            <input className="mainSearch"
                                placeholder="Procedure name or DRG code"
                                type="text"
                                onChange={this.updateMainSearch.bind(this)} />
                        </Col>

                        <Col sm='2'>
                            <input className="locSearch"
                                placeholder="Zip code"
                                type="text"
                                onChange={this.updateLocSearch.bind(this)}
                                />
                        </Col>

                        <Col sm='2'>
                            <input className="radSearch"
                                type="text"
                                placeholder="Minimum"
                                onChange={this.updateMinSearch.bind(this)} />
                        </Col>
                        <Col sm='2'>
                            <input className="radSearch"
                                type="text"
                                placeholder="Maximum"
                                onChange={this.updateMaxSearch.bind(this)} />
                        </Col>

                        <Col sm='2'>
                            <input className="radSearch"
                                type="text"
                                placeholder="Distance"
                                onChange={this.updateRadSearch.bind(this)} />
                        </Col>

                    </Row>
                    <Row className={'align-items-right'}>
                        <Col className={'offset-8'} sm='4'>
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