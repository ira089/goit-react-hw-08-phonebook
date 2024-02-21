import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operationsAuth';
import { Input, Button, Box } from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // console.log(form);
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box p={8} w={380}>
      <form onSubmit={handleSubmit}>
        {/* // autoComplete="off"> */}
        <label>
          Username
          <Input
            isInvalid
            errorBorderColor=" darkturquoise"
            placeholder="Username"
            type="text"
            name="name"
            required
          />
        </label>
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
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
