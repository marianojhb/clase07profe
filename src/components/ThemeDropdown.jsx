import { NavDropdown } from 'react-bootstrap';

const ThemeDropdown = () => {

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  return (
    <>
      <NavDropdown
        title={<i className="bi bi-circle-half"></i>}
        id="theme-menu"
        align="end"
        aria-label="Toggle theme"
      >
        <NavDropdown.Item as="button" data-bs-theme-value="light" onClick={handleThemeChange.bind(null, 'light')}>
          <i className="bi bi-sun-fill"></i>
          <span className="ms-2">Light</span>
        </NavDropdown.Item>
        <NavDropdown.Item as="button" data-bs-theme-value="dark" onClick={handleThemeChange.bind(null, 'dark')}>
          <i className="bi bi-moon-stars-fill"></i>
          <span className="ms-2">Dark</span>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
export default ThemeDropdown;