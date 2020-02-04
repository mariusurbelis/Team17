import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Styles = styled.div`

    .footer {
        flex-shrink: 0;
        text-align: center;
        background-color: grey;
        color: white;
    }

`;

export const Version = (props) => (
    <Styles>
        <footer className="footer">
            <p>Sprint 2 Edition</p>
        </footer>
    </Styles>
)   