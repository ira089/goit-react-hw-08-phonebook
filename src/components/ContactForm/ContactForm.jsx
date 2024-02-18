import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from '../../redux/contacts/operations';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { items } = useSelector(selectContacts);
  // console.log(items);
  // arr
  const dispatch = useDispatch();

  const handleChangeName = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const handleChangeNumber = ({ target }) => {
    const { value } = target;
    setNumber(value);
  };

  const isDublicate = evt => {
    // console.log(evt);
    const normalizedName = evt.toLowerCase();
    const dublicate = items.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );
    return dublicate;
  };

  const addTask = e => {
    e.preventDefault();
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContactsThunk({ name, number }));
    setName('');
    setNumber('');
  };

  const contactNameId = useMemo(() => nanoid(), []);
  const contactNumberId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={addTask} className={styles.formWrap}>
      <label htmlFor={contactNameId} className={styles.formItem}>
        Name
        <input
          onChange={handleChangeName}
          value={name}
          name="name"
          required
          id={contactNameId}
          placeholder="Name"
          type="text"
        ></input>
      </label>

      <label htmlFor={contactNumberId} className={styles.formItem}>
        Phone
        <input
          onChange={handleChangeNumber}
          value={number}
          name="number"
          id={contactNumberId}
          placeholder="Phone"
          required
        ></input>
      </label>

      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
