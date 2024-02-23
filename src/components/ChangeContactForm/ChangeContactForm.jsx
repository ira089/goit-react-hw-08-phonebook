import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContactsThunk } from '../../redux/contacts/operations';
import { ButtonSubmit } from 'components/Button/Button';
import { Input, Stack } from '@chakra-ui/react';

const ChangeContactForm = ({ id, nameChange, numberChange, close }) => {
  const [name, setName] = useState(nameChange);
  const [number, setNumber] = useState(numberChange);

  const dispatch = useDispatch();

  const handleChangeName = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const handleChangeNumber = ({ target }) => {
    const { value } = target;
    setNumber(value);
  };

  const changeContact = e => {
    e.preventDefault();

    dispatch(changeContactsThunk({ id, name, number }));
    setName('');
    setNumber('');
    close();
  };

  return (
    <form onSubmit={changeContact}>
      <Stack spacing={4} mb={4}>
        <label>
          Name
          <Input
            mb={3}
            variant="outline"
            isInvalid
            errorBorderColor="aquamarine"
            onChange={handleChangeName}
            value={name}
            name="name"
            type="text"
            autoComplete="off"
          />
        </label>
        <label>
          Phone
          <Input
            variant="outline"
            isInvalid
            errorBorderColor="aquamarine"
            onChange={handleChangeNumber}
            value={number}
            name="number"
            autoComplete="off"
          />
        </label>
      </Stack>
      <ButtonSubmit>Change contact</ButtonSubmit>
    </form>
  );
};

export default ChangeContactForm;
