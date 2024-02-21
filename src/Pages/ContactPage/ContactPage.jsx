import React from 'react';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/ContactList/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Box, Heading, Container } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Container p={4}>
      <Box>
        <Heading fontSize={28}>Phonebook</Heading>
      </Box>
      <Box mb={6} w="50%">
        <AddContactForm />
      </Box>
      <Box mt={4}>
        <Heading fontSize={20}>Contact</Heading>
      </Box>
      <Box>
        <Filter />
      </Box>
      <Box>
        <ContactList />
      </Box>
    </Container>
  );
  // return (
  //   <div className={styles.wrap}>
  //     <h1>Phonebook</h1>
  //     <AddContactForm />

  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
};
export default ContactPage;
