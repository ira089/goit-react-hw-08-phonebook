import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContactsThunk } from '../../redux/contacts/operations';
import { ButtonGroup, Button } from '@chakra-ui/react';
import Modalwindow from 'components/Modal/Modal';

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
    // console.log(id);
    showModal();
  };

  return (
    <>
      <li key={id} id={id}>
        {name}: {number}{' '}
        <ButtonGroup variant="outline" spacing="2">
          <Button
            colorScheme="teal"
            variant="solid"
            size="xs"
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            Delete
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            size="xs"
            onClick={() => onChangeContact(id)}
            type="button"
          >
            Change
          </Button>
        </ButtonGroup>
      </li>
      {modalOpen && (
        <Modalwindow close={closeModal} id={id} name={name} number={number} />
      )}
    </>
  );
};

export default ContactItems;
