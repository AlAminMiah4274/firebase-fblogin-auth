import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";


const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand href="#home" className='fs-2'>Miah Hotel</Navbar.Brand>
                        </LinkContainer>
                        <Nav className="me-auto" activeKey={window.location.pathname}>
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/bookedroom">
                                <Nav.Link>Booked Room</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;