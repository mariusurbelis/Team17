import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import NewSearch from './components/NewSearch';

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
        padding-bottom :50px;
        height: auto;
        align-content: right;   
    }
`;

export const Home = (props) =>(
    <Styles>
        <NewSearch />
        <Row style={{ background: "#32a852", }}>
          
        </Row>

    </Styles>
)