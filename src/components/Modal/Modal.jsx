import React from 'react';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
// } from '@chakra-ui/react';
import styles from './Modal.module.css';
import ChangeContactForm from 'components/ChangeContactForm/ChangeContactForm';

// const Modalwindow = ({ close, id, name, number }) => {

//   return (
//     <Modal className={styles.overlay} isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalCloseButton />
//         <ModalBody>
//           <ChangeContactForm id={id} nameChange={name} numberChange={number} />
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// };

const Modalwindow = ({ close, id, name, number }) => {
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
export default Modalwindow;
