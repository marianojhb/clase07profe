import { NavDropdown } from 'react-bootstrap';
import { useEffect } from 'react';

const ThemeDropdown = () => {
  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  };
  useEffect(() => {
    const updateTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const hour = new Date().getHours();
        const autoTheme = hour >= 6 && hour < 18 ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', autoTheme);
      } else {
        // ← AGREGA ESTA LÍNEA
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
      }
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavDropdown title={<i className="bi bi-circle-half"></i>} id="theme-menu" align="end" aria-label="Toggle theme">
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
};
export default ThemeDropdown;
