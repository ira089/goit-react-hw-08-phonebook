import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContactsThunk } from '../../redux/contacts/operations';
import { ButtonSubmit } from 'components/Button/Button';
import styles from '../ContactForm/ContactForm.module.css';
// import { selectContacts } from '../../redux/contacts/selectors';
// import { nanoid } from '@reduxjs/toolkit';

const ChangeContactForm = ({ id, nameChange, numberChange, close }) => {
  const [name, setName] = useState(nameChange);
  const [number, setNumber] = useState(numberChange);

  //   const { items } = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChangeName = ({ target }) => {
    const { value } = target;
    console.log(value);
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

  //   const contactNameId = useMemo(() => nanoid(), []);
  //   const contactNumberId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={changeContact} className={styles.formWrap}>
      <label className={styles.formItem}>
        Name
        <input
          onChange={handleChangeName}
          value={name}
          name="name"
          type="text"
          autoComplete="off"
        ></input>
      </label>

      <label className={styles.formItem}>
        Phone
        <input
          onChange={handleChangeNumber}
          value={number}
          name="number"
          autoComplete="off"
        ></input>
      </label>
      <ButtonSubmit>Change contact</ButtonSubmit>
    </form>
  );
};

export default ChangeContactForm;
