import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import City from '../assets/city.png';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';


const Styles = styled.div`

    .homeHeading{
        padding-top : 50%;
        color: grey;
    }
    .homeHeading2{
        padding-top : 10%;
        color: grey;
    }

    .footer {
        flex-shrink: 0;
        text-align: center;
        background-color: grey;
        color: white;
    }

    img{
        padding-top :50px;
        height: auto;
        align-content: right;   
    }

`;

export const CityBanner = (props) => (
    <Styles>
        <Row>
            <Col><h1 class="homeHeading">A smarter way to find affordable healthcare</h1></Col>
            <Col><Image src={City} align="right" /></Col>
        </Row>
        <Row>
            <Col>
                <h1 class = "homeHeading2">Start Saving Money Today</h1>
                <p>Using our price comparison tools to make sure that the hospitals 
                    don't have the upper hand. Informed consumers are free consumers
                </p>
            </Col>
        </Row>
    </Styles>
)   