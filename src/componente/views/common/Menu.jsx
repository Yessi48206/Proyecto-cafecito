import { Navbar,Container, Nav } from "react-bootstrap";
import {Link, NavLink} from "react-router-dom"
const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           {/*
    
     <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
    */}
    <NavLink to='/' className={'nav-item nav-link'}>Inicio</NavLink>
    <NavLink to='/administrar' className={'nav-item nav-link'}>Admistrador</NavLink>
    <NavLink to='/IniciarSesion' className={'nav-item nav-link ' }>Iniciar Sesion</NavLink>
    <NavLink to='/crearCuenta' className={'nav-item nav-link '}> Crear Cuenta</NavLink>
   

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;