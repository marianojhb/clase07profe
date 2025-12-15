import { Navbar, Nav, Container } from 'react-bootstrap';
import IconCart from './IconCart';
import { NavLink } from 'react-router-dom';

const Navegacion = ({ cart }) => {
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

            <IconCart cart={cart} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
