import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Styles = styled.div`
    --bg: #E0E0E0;
    --fg: #424242;
    --bd: #BDBDBD;

    border-radius: 15px;
    background: #220b5c;
    width: auto;
    margin: 0px 0px 10px 0px;
    padding 40px;

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
        color: white;
        height: auto;
       width: 15%; 
    }

    .radio{
        width 3%;
        
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
    
    .mainSearch2 {
        width: 25%;
        background: var(--bg);
        color: var(--fg);
        border: 2px solid var(--bd);
        border-width: 2px 0px 2px 0px;
        padding: 12px;
        // padding-bottom: 17px;
        // padding-top: 17px;
    }
    .mainSearch3 {
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

const butStyle = {
    width: '10%'
}

var divStyle = {
    background: 'yellow',
    width: 'auto',
    margin: '0px 0px 10px 0px',
}

var boxStyle = {
    width: '90%'
}



export default class NewSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchMain: " Search Main",
            searchLocation: "Search Location",
            searchRadius: "Search Radius",
            selectedOption: "procCode"
        }
    }
    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    updateSearch(event) {
        this.setState({ search: event.target.value })
    }
    render() {
        return (
            <Styles>
                <label className="label">Search By: </label>
                <Row>
                    <input
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
                    <label className="label">Procedure Name </label>
                </Row>
                <Row>
                    <label className="smallLabel" style={{width: '60%'}}>Search for procedure</label>
                    <label className="smallLabel" style={{width: '25%'}}>(Optional) Enter Your City</label>
                    <label className="smallLabel" style={{width: '15%'}}>Search Radius (KM)</label>
                    

                </Row>
                <Row>
                    <input className="mainSearch"
                        type="text"
                        value={this.state.searchMain}
                        onChange={this.updateSearch.bind(this)} />

                    <input className="mainSearch2"
                        type="text"
                        value={this.state.searchLocation}
                        onChange={this.updateSearch.bind(this)} />

                    <input className="mainSearch3"
                        type="text"
                        value={this.state.searchRadius}
                        onChange={this.updateSearch.bind(this)} />

                </Row>
                <Row>
                    <label style={{width: '80%'}}></label>
                        <input className={'butn'} type="submit" value="Submit" />
                </Row>
            </Styles>
        )
    }
}

{/* <Col>
<input className="subSearch"
    type="text"
    value={this.state.search}
    onChange={this.updateSearch.bind(this)} />
</Col>
<Col>
<input className="subSearch"
    type="text"
    value={this.state.search}
    onChange={this.updateSearch.bind(this)} />
</Col> */}