import { Navigate } from 'react-router-dom';

// En RutaProtegida.jsx
export default function RutaProtegida({ children }) {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
