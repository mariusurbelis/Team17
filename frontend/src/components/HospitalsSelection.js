import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import HospitalsMap from '../components/HospitalsMap';


var locations = new Array(
	["Dundee", { lat: 56.462002, lng: -2.970700 }],
	["Dunde1", { lat: 57.462002, lng: -2.970700 }],
	["Dunde2", { lat: 58.462002, lng: -2.970700 }],
	["Dunde3", { lat: 59.462002, lng: -2.970700 }],
	["Dunde4", { lat: 60.462002, lng: -2.970700 }],
)

const Styles = styled.div`
    h1{
        color: grey;
    }

    .PageTitle{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    hr{
        border: 1px solid grey;

    }
`;

export const HospitalsSelection = (props) => (
    <Styles>
        <h1 class = "PageTitle"> Hospitals In Your Local Area </h1>
        <hr></hr>
        <Row>
            <Col>
                <HospitalsMap hospList={locations} hi={500} wi={500}/>
            </Col>
            <Col>
                <p>Place cards here</p>
            </Col>
        </Row>
    </Styles>
)   