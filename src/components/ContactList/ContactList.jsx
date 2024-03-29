import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectContacts,
} from '../../redux/contacts/selectors';
import { getContactsThunk } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';
import ContactItems from '../ContactItems/ContactItems';

const ContactList = () => {
  const { isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const itemsVisible = useSelector(selectFilteredContacts);
  // console.log(itemsVisible);

  const elements = itemsVisible.map(item => (
    <ContactItems
      key={item.id}
      id={item.id}
      number={item.number}
      name={item.name}
    />
  ));

  const isItemsVisible = Boolean(itemsVisible.length);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isItemsVisible && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default ContactList;
