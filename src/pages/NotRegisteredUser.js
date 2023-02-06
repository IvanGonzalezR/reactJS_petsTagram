import { Box, CardMedia } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { UserForm } from '../components/UserForm';
import { setIsAuth, activateAuth } from '../slices/basicSlice';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { useLoginMutation } from '../hooks/useLoginMutation';


const NotRegisteredUser = () => {
  const boxStyles = {
    height: '100vh',
    width: '100%',
    maxWidth: '500px',
    position: 'fixed',
    zIndex: 1,
    padding: '0',
    '& > img': {
      margin: '0 auto',
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  };
  const cardMediaStyles = {
    filter: 'blur(3px)',
  }

  const dispatch = useDispatch();
  const { register, loading: registerLoading, error: registerError } = useRegisterMutation();
  const { login, loading: loginLoading, error: loginError } = useLoginMutation();
  const [ signUp, setSignUp ] = React.useState(true);

  const handleRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    register({
      variables: variable
    }).then(({ data }) => {
      const { signup } = data;
      dispatch(activateAuth(signup));
    });
  };

  const handleLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    login({
      variables: variable
    }).then(({ data }) => {
      const { login } = data;
      dispatch(activateAuth(login));
    });
  };

  return (
    <>
      <Box sx={boxStyles}>
        <CardMedia
          component='img'
          image='https://i.imgur.com/dPh3NDK.jpg'
          sx={cardMediaStyles}
          alt='logo' />
      </Box>
      <UserForm
        onRegister={handleRegister}
        onLogin={handleLogin}
        registerLoading={registerLoading}
        registerError={registerError}
        loginLoading={loginLoading}
        loginError={loginError}
        signUp={signUp}
        setSignUp={setSignUp}
      />
    </>
  )
}

export { NotRegisteredUser };
