import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;
