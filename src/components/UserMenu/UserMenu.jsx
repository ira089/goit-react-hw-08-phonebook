import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectorsAuth';
import { logOutThunk } from '../../redux/auth/operationsAuth';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handeleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={handeleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
