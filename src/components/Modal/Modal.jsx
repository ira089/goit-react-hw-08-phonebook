import React from 'react';
import styles from './Modal.module.css';
import ChangeContactForm from 'components/ChangeContactForm/ChangeContactForm';

const Modal = ({ close, id, name, number }) => {
  return (
    <div className={styles.overlay}>
      <button className={styles.btnClose} onClick={close}>
        X
      </button>
      <ChangeContactForm
        id={id}
        nameChange={name}
        numberChange={number}
        close={close}
      />
    </div>
  );
};
export default Modal;
