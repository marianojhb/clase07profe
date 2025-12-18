import { Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from || '/account'; // destino por defecto

  const handleLogin = (e) => {
    e.preventDefault();
    const credencial1 = { email: 'mbelgrano@gmail.com', password: '123', firstname: 'Mariano', lastname: 'Belgrano', fullname: 'Mariano Belgrano' };
    if (e.target.email.value === credencial1.email && e.target.password.value === credencial1.password) {
      const userData = { email: credencial1.email, name: credencial1.firstname };
      login(userData);
      alert('Login exitoso');
      navigate(from, { replace: true });
    } else {
      alert('Credenciales incorrectas');
    }
  };
  return (
    <Container className="py-4">
      <h2 className="mb-3">Página de inicio de sesión</h2>
      <p>Por favor, ingrese sus credenciales para acceder a su cuenta.</p>

      <div className="card col-sm-4 mx-auto p-4">
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value="mbelgrano@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label mt-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value="123"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}
