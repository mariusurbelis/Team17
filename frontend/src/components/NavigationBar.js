import React from 'react';
import { Nav, Navbar/*, NavbarBrand */ } from 'react-bootstrap';

import styled from 'styled-components';
// import { Switch } from 'react-router-dom';

const Styles = styled.div`
    .navbar {
        font-size: 20px;
    }

    .navbar-brand{
        font-size: 30px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">helpme.io</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href ="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/hospitals">Hospitals</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/procedures">Procedures</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)