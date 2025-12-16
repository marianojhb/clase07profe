import { Navbar, Nav, Container } from 'react-bootstrap';
import IconCart from './IconCart';
import Account from '../pages/Account';
import { NavLink } from 'react-router-dom';

const Navegacion = ({ cart, setCart }) => {

  
  const links = [
    {
      name: 'Acerca de',
      url: '/about',
    },
    {
      name: 'Contacto',
      url: '/contact',
    },
    {
      name: 'Productos',
      url: '/products',
    },
  ];

  return (
    <>
      <Navbar expand="lg" className="nav nav-tabs" role="tablist">
        <Container>
          <Navbar.Brand as={NavLink} to={'/'}>
            Sitio de Compras
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-items">
              {links.map((link, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={link.url}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  data-bs-toggle="tab"
                  aria-selected="true"
                  role="tab"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Nav.Link className="nav-items" as={NavLink} to={'/account'} style={{ marginRight: '5px' }} aria-label="Ir a mi cuenta">
                Mi cuenta
              </Nav.Link>
              <Nav.Link className="nav-items" as={NavLink} to={'/checkout'} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #d3d3d3'}} aria-label="Ir al carrito">
                <IconCart  cart={cart} setCart={setCart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
