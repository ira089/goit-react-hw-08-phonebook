import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operationsAuth';
import { Input, Button, Box } from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form);
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box p={8} w={380}>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <Input
            isInvalid
            errorBorderColor=" darkturquoise"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Password
          <Input
            isInvalid
            errorBorderColor=" aquamarine"
            placeholder="Password"
            type="password"
            name="password"
            required
          />
        </label>
        <Button
          mt={6}
          colorScheme="teal"
          variant="solid"
          size="md"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
