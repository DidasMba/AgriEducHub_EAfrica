import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
//add
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


import '.../Header.css';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css'; // Import your custom CSS file
import ImageSection from '../Image';

//import your components
import About from '../About';
import Users from '../Users';
import Home from '../Home';


function Header()
{
  return (
    <Router>
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="band">AgriLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navclass"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
            <NavDropdown title="Forum" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Forum</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Profile
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ImageSection />{/*componet imagesection*/}
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
    </Routes>
    </div>
    </Router>
  );
}

export default Header