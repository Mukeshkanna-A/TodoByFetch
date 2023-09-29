import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styled/NavBar.css';
import logo from '../images/todo_logo.svg';

function NavBar() {
    return (
      <Navbar expand="lg" className="custom-background-color">
        <Container>
        <img src={logo} alt="" style={{width:"3rem",height:"2rem"}}/>
          <Navbar.Brand href="#" style={{fontWeight:"bold",fontSize:"2rem"}}>To-Do List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1" style={{fontWeight:"bold",fontSize:"1rem"}}>Home</Nav.Link>
              <Nav.Link href="#action2" style={{fontWeight:"bold",fontSize:"1rem"}}>Todo List</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;