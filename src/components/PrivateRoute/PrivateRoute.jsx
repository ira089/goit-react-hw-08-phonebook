import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);

  return !isLogin ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
