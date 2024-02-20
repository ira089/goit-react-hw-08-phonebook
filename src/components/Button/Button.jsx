import React from 'react';
// import styles from '../ContactList/ContactList.module.css';
import { Button } from '@chakra-ui/react';

// export const Button = ({ onClick, type = 'button', children }) => {
//   return (
//     <button onClick={onClick} type={type}>
//       {children}
//     </button>

// <button colorScheme='teal' variant='solid' size='xs' onClick={onClick} type={type}>
//   {children}
// </button>
//   );
// };

// className={styles.btnDel}

export const ButtonSubmit = ({ type = 'submit', children }) => {
  return (
    <Button colorScheme="teal" variant="solid" size="xs" type={type}>
      {children}
    </Button>
  );

  //  <button type={type}>{children}</button>;
};

// className={styles.btn}
