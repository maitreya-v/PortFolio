import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Connect from './Connect';
const NavBar = () => {

  
  return (
    <Navbar expand="lg" className='nav align-items-center'>
    <Container >
      <Navbar.Brand href="/" className='nav-brand ms-lg-5'>Port<spam className='nav-brand-folio'>Folio</spam></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
         <span className='nav-link-span d-lg-flex align-items-center me-lg-5'>
         <Nav.Link href="/" className='nav-link me-lg-4'>Home</Nav.Link>
          <Nav.Link href="/about" className='nav-link me-lg-4'>About</Nav.Link>
          <Nav.Link href="/projects" className='nav-link me-lg-4'>Projects</Nav.Link>
          <Nav.Link href="/experience" className='nav-link me-lg-4'>Experience</Nav.Link>
         </span>
          
       <Connect/>
          
        </Nav>
         </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar