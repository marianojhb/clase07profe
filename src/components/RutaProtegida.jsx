import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// En RutaProtegida.jsx
export default function RutaProtegida({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (user) return children;

  return <Navigate to="/login" replace state={{ from: location.pathname + location.search + location.hash }} />;
}
