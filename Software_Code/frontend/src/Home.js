import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import NewSearch from './components/NewSearch';
import styled from 'styled-components';
import { Component } from 'react';
import City from './assets/city.png';



const Styles = styled.div`
    .homeHeading{
        padding-top : 25%;
        color: white;
    }

    .headingRow{
        padding-top : 500px;
    }


    img{
        padding-top :50px;
        padding-bottom :50px;
        height: auto;
        align-content: right;   
    }
`;




export class Home extends Component {

    sendData = () => {
        this.props.parentCallback(this.state);
    }
    
    state = {
        s1: "",
        s2: "",
        s3: "",
        s4: false
    }
    callbackFunction = (childData) => {
        this.setState({
            s1: childData.searchMain,
            s2: childData.searchLocation,
            s3: childData.searchRadius,
            s4: childData.selectedOption,
        })
        this.sendData()
    }

    render() {

        if (!this.state.s4) {
            return (

                <Styles>
                    <NewSearch home={true} parentCallback={this.callbackFunction} />
                    <Row style={{ background: "#32a852", }}>

                    </Row>
                </Styles>
            )
        } else {
            return (

                <ul>
                    <li>{this.state.s1}</li>
                    <li>{this.state.s2}</li>
                    <li>{this.state.s3}</li>
                    <li>{this.state.s4}</li>
                </ul>
            )
        }
    }
}

export default Home
