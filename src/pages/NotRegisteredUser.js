import { Box, CardMedia } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { UserForm } from '../components/UserForm';
import { setIsAuth } from '../slices/basicSlice';
import { useRegisterMutation } from '../hooks/useRegisterMutation';


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
  const { register, loading, error } = useRegisterMutation();
  const [ signUp, setSignUp ] = React.useState(true);

  const handleSubmit = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    register({
      variables: variable
    }).then(() => {
      dispatch(setIsAuth(true));
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
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        signUp={signUp}
        setSignUp={setSignUp}
      />
    </>
  )
}

export { NotRegisteredUser };
