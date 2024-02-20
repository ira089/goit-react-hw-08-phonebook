import React from 'react';
import styles from '../ContactList/ContactList.module.css';

export const Button = ({ onClick, type = 'button', children }) => {
  return (
    <button className={styles.btnDel} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export const ButtonSubmit = ({ type = 'submit', children }) => {
  return (
    <button className={styles.btn} type={type}>
      {children}
    </button>
  );
};
