import React from 'react';
import styles from '../RegisterForm/RegisterForm.module.css';

const LoginForm = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* // autoComplete="off"> */}
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
