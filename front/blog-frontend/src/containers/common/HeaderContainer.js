import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/auth';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    navigate('/'); // 홈으로 리디렉션
  };
  return <Header auth={auth} onLogout={onLogout} />;
};

export default HeaderContainer;
