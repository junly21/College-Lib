import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { loginId, password } = form;
    dispatch(login({ loginId, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (auth && auth.message) {
      console.log('오류 발생');
      console.log(auth.message);
      setError(auth.message);
      return;
    }

    if (auth) {
      console.log('로그인 성공');
      navigate('/');
      console.log(auth);
    }
  }, [auth, authError, dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     navigate('/');
  //     try {
  //       localStorage.setItem('user', JSON.stringify(user));
  //     } catch (e) {
  //       console.log('로컬스토리지가 동작중이지 않습니다.');
  //     }
  //   }
  // }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
