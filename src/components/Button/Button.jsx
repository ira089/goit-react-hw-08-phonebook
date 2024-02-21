import React from 'react';
import { Button } from '@chakra-ui/react';

export const ButtonSubmit = ({ type = 'submit', children }) => {
  return (
    <Button colorScheme="teal" variant="solid" size="xs" type={type}>
      {children}
    </Button>
  );
};
