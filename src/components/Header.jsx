import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-black" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Pagina C.A</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="/reactBootstrapBasico">Inicio</Nav.Link>
                    <Nav.Link href="/reactBootstrapBasico/Productos">Productos</Nav.Link> */}
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/Productos" className="nav-link">Productos</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
