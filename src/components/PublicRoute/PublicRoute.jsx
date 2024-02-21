import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return isLogin ? <Navigate to="/contacts" /> : <Outlet />;
};

export default PublicRoute;
