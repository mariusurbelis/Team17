import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const Styles = styled.div`

background: rgb(11,156,219);
    background: linear-gradient(162deg, rgba(11,156,219,1) 0%, rgba(128,219,120,1) 100%);
    --bg: #F5F5F5;
    --fg: grey;
    --bd: #00A67B;

    //border-radius: 14px;
    background: white;
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

    .radio2{
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

// const butStyle = {
//     width: '10%'
// }

// var divStyle = {
//     background: 'yellow',
//     width: 'auto',
//     margin: '0px 0px 10px 0px',
// }

// var boxStyle = {
//     width: '90%'
// }

var             hStyle = {
    margin: '50px 0px 80px 0px',
    width: "100%",
    borderRadius: '14px',
}

export default class NewSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchMain: "",
            searchLocation: "",
            searchRadius: "",
            selectedOption: "procCode",
            selectedSort: "incPrice"
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
        this.sendData()
        event.preventDefault();
        this.setState({ searchMain: "Submitted" });


    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleSortChange = changeEvent => {
        this.setState({
            selectedSort: changeEvent.target.value
        });
    };

    updateMainSearch(event) {
        this.setState({ searchMain: event.target.value })
    }
    updateLocSearch(event) {
            this.setState({ searchLocation: event.target.value })
    }
    updateRadSearch(event) {
        this.setState({ searchRadius: event.target.value })
    }
    updateSearch(event) {
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
                        <input
                            className="radio"
                            name="codeName"
                            type="radio"
                            value="procCode"
                            checked={this.state.selectedOption === "procCode"}
                            onChange={this.handleOptionChange}
                        />
                        <label className="label">Procedure Code </label>
                        <input
                            className="radio"
                            name="codeName"
                            type="radio"
                            value="procName"
                            checked={this.state.selectedOption === "procName"}
                            onChange={this.handleOptionChange}
                        />
                        <label className="label">Procedure Name </label>

                        <label style={{ width: '44%' }}></label>
                        <input className={'butn'}
                            type="submit"
                            value="Submit"
                            onClick={this.handleSubmit} />

                        <input
                            className="radio2"
                            name="decIncr"
                            type="radio"
                            value="decrPrice"
                            checked={this.state.selectedSort === "decrPrice"}
                            onChange={this.handleSortChange}
                        />
                        <label className="label">Sort by Decreasing Price </label>

                        <input
                            className="radio2"
                            name="Clark"
                            type="radio"
                            value="incrPrice"
                            checked={this.state.selectedSort === "incrPrice"}
                            onChange={this.handleSortChange}
                        />
                        <label className="label">Sort by Increasing Price </label>
                        
                    </Row>
                </Styles>
            </ form>
        )
    }
}