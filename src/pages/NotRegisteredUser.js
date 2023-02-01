import { Box, CardMedia, Container } from '@mui/material';
import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { UserForm } from '../components/UserForm';
import { setIsAuth } from '../slices/basicSlice';


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
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setIsAuth(true));
  }

  return (
    <>
      <Box sx={boxStyles}>
        <CardMedia component='img' image='https://i.imgur.com/dPh3NDK.jpg' alt='logo' />
      </Box>
      <UserForm onSubmit={handleSubmit} title='Login'></UserForm>
      {/* <UserForm onSubmit={handleSubmit} title='Registrarse'></UserForm> */}
    </>
  )
}

export { NotRegisteredUser };
