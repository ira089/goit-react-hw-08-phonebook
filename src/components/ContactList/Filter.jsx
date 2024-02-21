import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/filterSlice';
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
        w={300}
        isInvalid
        errorBorderColor="aquamarine"
        placeholder="Search"
        onChange={changeFitler}
        name="filter"
      />
    </>
  );
};

export default Filter;
