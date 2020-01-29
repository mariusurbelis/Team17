import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Styles = styled.div`
    .homeHeading{
        padding-top : 25%;
        color: grey;
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

export const HomepageSearch = () =>(
    <Styles>
        <Row>
            <Col>
                <h1 class = "homeHeading">Start Saving Money Today</h1>
                <p>Using our super advanced AI search tools that are absolutly
                    not a bunch of IF statements, we can help you find the best
                    price for the healthcare you require. Simply enter your location
                    and the name/code of the procedure and hit search.
                </p>
            </Col>
            <Col></Col>
        </Row>
    </Styles>
)