import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from '../contexts/UserContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleButton = () => {
        userLogOut()
            .then(() => { })
            .catch(e => {
                console.error(e);
            })
    }

    return (
        <div>
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

                        {user?.email ?
                            <Button onClick={handleButton} variant="link"><Link>SignOut</Link></Button> :
                            <Button variant="link"><Link to='/login'>SignIn</Link></Button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;