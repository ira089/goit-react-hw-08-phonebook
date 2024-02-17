import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.css';
import { registerThunk } from '../../redux/auth/operationsAuth';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // console.log(form);
    dispatch(
      registerThunk({
        name: form.elements.name.value,
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
          Username
          <input type="text" name="name" />
        </label>
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
