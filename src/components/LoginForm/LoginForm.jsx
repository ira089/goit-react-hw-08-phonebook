import React from 'react';
import styles from '../RegisterForm/RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operationsAuth';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form);
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
