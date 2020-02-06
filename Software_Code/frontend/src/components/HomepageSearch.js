import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placeholder from '../assets/placeholder.png';
import styled from 'styled-components';
import SearchBar from './SearchBar'

const Styles = styled.div`
    .homeHeading{
        padding-top : 10%;
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
                <p>Using our price comparison tools to make sure that the hospitals 
                    don't have the upper hand. Informed consumers are free consumers
                     
                </p>
            </Col>

            
        </Row>
    </Styles>
)
