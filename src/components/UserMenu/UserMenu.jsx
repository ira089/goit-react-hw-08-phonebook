import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectorsAuth';

const UserMenu = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>{user.email}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
