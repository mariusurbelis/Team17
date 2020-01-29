import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

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
        height: auto;
        align-content: right;   
    }
`;

export const Home = () =>(
    <Styles>
        <Row>
            <Col><h1 class = "homeHeading">A smarter way to find affordable healthcare</h1></Col>
            {/* <Col><Image src={City} align="right"/></Col> */}
            {/* Remove Linus \/\/\/    Uncomment the image /\/\/\ */}
            <Col><Image style={{'width':'300px'}} src={'https://kwize.com/pics/Linus-Torvalds-quote-about-talking-1c9797.jpg'} align="right"/></Col>
        </Row>
    </Styles>
)