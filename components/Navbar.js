import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="App">SINEMAKU</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="tiket">TiketKu</Nav.Link>
            <Nav.Link href="sinemapay">SinemaPay</Nav.Link>
            <NavDropdown title="Beli Tiket" id="navbarScrollingDropdown">
              <NavDropdown.Item href="tiketreguler">Tiket Regular</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Tiket Premiere
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Booking Bioskop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cari Kota"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger" size="lg" disabled>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;