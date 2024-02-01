// Import necessary dependencies from React and React Bootstrap
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Import custom styles
import '../Header.css';

// Import Bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Import additional custom styles
import './Header.css'; // Import your custom CSS file

// Import custom components
import ImageSection from '../ImageSection';
import About from '../About';
import Users from '../Users';
import Home from '../Home';

// Define the Header functional component
function Header() {
  return (
    <Router>
      <div>
        {/* Navbar section */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" className="band">AgriLearn</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* Navigation links */}
              <Nav
                className="navclass"
                style={{ maxHeight: '200px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
                {/* Forum dropdown */}
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
                {/* Disabled Profile link */}
                <Nav.Link href="#" disabled>
                  Profile
                </Nav.Link>
              </Nav>
              {/* Search form */}
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
        
        {/* ImageSection component */}
        <ImageSection />

        {/* Routing for different components */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// Export the Header component as the default export
export default Header;
