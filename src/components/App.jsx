import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';

import HomePage from 'Pages/Home/HomePage';
import { Layout } from 'Pages/Layout/Layout';
// import styles from './ContactForm/ContactForm.module.css';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './ContactList/Filter';

const ContactsPage = lazy(() => import('Pages/ContactPage/ContactPage'));
const Login = lazy(() => import('Pages/Login/Login'));
const Register = lazy(() => import('Pages/Register/Register'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
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
