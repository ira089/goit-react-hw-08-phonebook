import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/header.module.css';

const AuthNav = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
