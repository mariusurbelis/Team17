import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

    .footer {
        margin-top: 10%;
        padding-top: 25px;
        padding-bottom: 10px;
        flex-shrink: 0;
        text-align: center;
        background-color: 	#383838;
        color: white;
    }

`;

export const Footer = (props) => (
    <Styles>
        <footer className="footer">
            <h2>helpme.io</h2>
            <p>Made with love in Dundee ❤️</p>
        </footer>
    </Styles>
)   