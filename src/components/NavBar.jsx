import React from 'react'
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/" >Investec</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Landing</Nav.Link>
            <Nav.Link href="/maps">Maps</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
  )
}

export default NavBar

