import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div className="flex min-h-screen items-center justify-center text-slate-600">Loading your workspace...</div>;
  return user ? <Outlet /> : <Navigate to="/signin" replace state={{ from: location }} />;
}

export default ProtectedRoute;