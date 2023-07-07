import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="sm" variant="dark" className="mt-4 mb-4 rounded">
      <Container style={{ textShadow: '0 0 5px black, 0 0 10px gray, 0 0 15px black' }}>
        <Navbar.Brand as={NavLink} to="/" style={{ fontSize: '30px' }}><strong> Blog.app </strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" style={{ fontSize: '20px' }}><strong> Home </strong></Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={{ fontSize: '20px' }}><strong> About </strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};

export default NavBar;