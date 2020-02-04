import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    background: rgb(11,156,219);
    background: linear-gradient(162deg, rgba(11,156,219,1) 0%, rgba(128,219,120,1) 100%);
    height: auto;
`;

export const ColorLayout = (props) => (
    <Styles>
            <Container>
                {props.children}
            </Container>
    </Styles>
)