import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import ChangeContactForm from 'components/ChangeContactForm/ChangeContactForm';

const Modalwindow = ({ close, id, name, number }) => {
  return (
    <Modal isOpen={true} onClose={close}>
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalCloseButton />
        <ModalBody mt={8}>
          <ChangeContactForm
            id={id}
            nameChange={name}
            numberChange={number}
            close={close}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Modalwindow;
