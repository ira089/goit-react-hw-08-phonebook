import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'Pages/Home/HomePage';
import { Layout } from 'Pages/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refresThunk } from '../redux/auth/operationsAuth';
import { selectIsRefreshing } from '../redux/auth/selectorsAuth';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import styles from './ContactForm/ContactForm.module.css';

const ContactsPage = lazy(() => import('Pages/ContactPage/ContactPage'));
const Login = lazy(() => import('Pages/Login/Login'));
const Register = lazy(() => import('Pages/Register/Register'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresThunk());
  }, [dispatch]);

  return isRefreshing ? (
    'Loading...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

// const App = () => {
//   return (
//     <div className={styles.wrap}>
//       <h1>Phonebook</h1>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };
export default App;
