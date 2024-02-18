import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  //   const token = useSelector(selectToken);
  return isLogin ? <Navigate to="/contacts" /> : <Outlet />;

  //   if (!isLogin && token) {
  //     return <p>...Loading</p>;
  //   }

  //   if (!isLogin && !token) {
  //     return <Navigate to="/login" />;
  //   }

  //   return <Outlet />;
};

export default PublicRoute;
