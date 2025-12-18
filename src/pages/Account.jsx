import { Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function Account() {
  const { logout } = useAuth();
  const handleCerrarSesion = () => {
    logout();
    window.location.reload();
  };
  return (
    <>
      <Container className="py-4">
        <h2 className="mb-3"> Mi cuenta</h2>
        <p>Bienvenido a tu cuenta. Aquí puedes gestionar tu información personal y configuraciones.</p>
        <button onClick={handleCerrarSesion}>Cerrar sesión</button>
      </Container>
    </>
  );
}
