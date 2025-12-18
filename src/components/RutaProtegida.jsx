import { Navigate, useLocation } from 'react-router-dom';

// En RutaProtegida.jsx
export default function RutaProtegida({ children }) {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const location = useLocation();

  if (isAuthenticated) return children;

  return <Navigate to="/login" replace state={{ from: location.pathname + location.search + location.hash }} />;
}
