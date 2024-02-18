import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  //   const token = useSelector(selectToken);

  return !isLogin ? <Navigate to="/login" /> : <Outlet />;

  //   if (!isLogin && token) {
  //     return <p>...Loading</p>;
  //   }

  //   if (!isLogin && !token) {
  //     return <Navigate to="/login" />;
  //   }

  //   return <Outlet />;
};

export default PrivateRoute;
