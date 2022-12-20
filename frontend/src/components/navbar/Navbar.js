import React from "react";
// import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {

    return(
     <div>
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">AppOfNotes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/register">Registro</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/notas">Notas</Nav.Link>
                {/* <Nav.Link href="/create-nota">Nota</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     </div>       
  );
}

export default Menu;