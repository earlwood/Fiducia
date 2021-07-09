import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <Link to='/#page-top'>
          <img
            src="/img/logo.jpeg"
            width="80"
            height="80"
            className="img-fluid rounded "
            alt="Fiducia logo"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to='/#about'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/#services'>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} to='/#contact'>Contacto</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br /><br />
    </>
  );
};