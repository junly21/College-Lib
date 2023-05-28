import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { auth2 } = useSelector(({ auth }) => ({ auth2: auth.auth2 }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header auth2={auth2} onLogout={onLogout} />;
};

export default HeaderContainer;
