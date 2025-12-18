import { Navbar, Nav, Container } from 'react-bootstrap';
import IconCart from './IconCart';
import Account from '../pages/Account';
import { NavLink } from 'react-router-dom';
import ThemeDropdown from './ThemeDropdown';
// import Logo from '../assets/images/site/logocmyk_s.svg';
import { useNavigate } from 'react-router-dom';
import { BsHouseFill } from 'react-icons/bs';
import Logo from './Logo';

const Navegacion = ({ cart, setCart }) => {
  const navigate = useNavigate();

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
      <Container className="text-center py-3">
        {/* <img
              src={Logo}
              alt="Logo BambuGuazu"
              className="logo-navbar"
            /> */}

        <Logo className="logo" />
      </Container>
      <Navbar expand="lg" className="nav nav-tabs sticky-top" style={{ top: '10px' }} role="tablist">
        <Container>
          <Navbar.Brand as={NavLink} to={'/'}>
            <BsHouseFill size={24} className="BsHouseFillColor" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-items" style={{ gap: '0.2rem' }}>
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
            <Nav style={{ gap: '0.2rem' }}>
              <Nav.Link className="nav-items" as={NavLink} to={'/account'} aria-label="Ir a mi cuenta">
                Mi cuenta
              </Nav.Link>
              <Nav.Link className="nav-items nav-cart-link" as={NavLink} to={'/checkout'} aria-label="Ir al carrito">
                <IconCart cart={cart} setCart={setCart} />
              </Nav.Link>
              <ThemeDropdown />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
