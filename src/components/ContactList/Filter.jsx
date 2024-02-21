import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/filterSlice';
// import styles from './ContactList.module.css';
import { Input } from '@chakra-ui/react';
const Filter = () => {
  const dispatch = useDispatch();

  const changeFitler = ({ target }) => {
    dispatch(addFilter(target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <Input
        isInvalid
        errorBorderColor="aquamarine"
        placeholder="Search"
        onChange={changeFitler}
        name="filter"
      />
      {/* <input
        className={styles.filter}
        onChange={changeFitler}
        name="filter"
        placeholder="Search"
      /> */}
    </>
  );
};

export default Filter;
