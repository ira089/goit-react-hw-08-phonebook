import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContactsThunk } from '../../redux/contacts/operations';
// import styles from '../ContactList/ContactList.module.css';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const ContactItems = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onDeleteContact = id => {
    // console.log(id);
    dispatch(deleteContactsThunk(id));
  };

  const onChangeContact = id => {
    console.log(id);
    showModal();
  };

  return (
    <>
      <li key={id} id={id}>
        {name}: {number}{' '}
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        <Button onClick={() => onChangeContact(id)}>Change</Button>
      </li>
      {modalOpen && (
        <Modal close={closeModal} id={id} name={name} number={number} />
      )}
    </>
  );

  // return (
  //   <li key={id} id={id}>
  //     {name}: {number}{' '}
  //     <button
  //       className={styles.btnDel}
  //       onClick={() => onDeleteContact(id)}
  //       type="button"
  //     >
  //       Delete
  //     </button>
  //   </li>
  // );
};

export default ContactItems;
