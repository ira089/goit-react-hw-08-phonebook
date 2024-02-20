import React from 'react';
import styles from '../../components/AddContactForm/AddContactForm.module.css';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/ContactList/Filter';
import ContactList from 'components/ContactList/ContactList';
// import { Box } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <div className={styles.wrap}>
      {/* <Box textStyle="h1">Phonebook</Box> */}
      <h1>Phonebook</h1>
      <AddContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default ContactPage;
