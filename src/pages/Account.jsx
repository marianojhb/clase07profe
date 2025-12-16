import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export default function Account() {
  const isAuth=false;

  if (!isAuth) {
    
    return (
      <>
      <h2 className="py-4">Acceso denegado. Por favor, inicie sesión.</h2>
      <Navigate to="/login" replace={true} />
      </>
    )
  }
  return (
    <>
      <Container className="py-4">
        { isAuth &&
        <>
        <h2 className="mb-3"> Mi cuenta</h2>
        <p>Bienvenido a tu cuenta. Aquí puedes gestionar tu información personal y configuraciones.</p>
        </>
        }
      </Container>
    </>
  );
}
