import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';


const Styles = styled.div`
`;

export const LowerLayout = (props) => (
    <Styles>
            <Container>
                {props.children}
            </Container>
    </Styles>
)