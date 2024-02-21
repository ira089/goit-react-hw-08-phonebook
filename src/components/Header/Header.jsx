import React from 'react';
import styles from './header.module.css';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={styles.headerwrap}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
export default Header;
