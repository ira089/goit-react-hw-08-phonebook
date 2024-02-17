import React from 'react';
import styles from '../../components/ContactForm/ContactForm.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/ContactList/Filter';
import ContactList from 'components/ContactList/ContactList';

const ContactPage = () => {
  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactPage;
