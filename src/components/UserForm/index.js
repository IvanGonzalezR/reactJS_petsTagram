import React from 'react'
import { Box, Button, ButtonBase, CardMedia, FormControl, Input, InputBase, InputLabel, Paper, Typography } from '@mui/material';
import { useInputValue } from '../../hooks/useInputValue';
import { Stack } from '@mui/system';
import logo from '../../img/petgram.png';

const UserForm = ({ onSubmit, title }) => {
  const parentBoxStyles = {
    height: '85vh',
    width: '100%',
    maxWidth: '500px',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  };
  const paperStyles = {
    height: '70vh',
    width: '70%',
    maxWidth: '300px',
    padding: '0 20px',
    position: 'fixed',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  };
  const childBoxStyles = {
    height: '100%',
    width: '100%',
    maxWidth: '230px',
    padding: '16px 0',
    display: 'flex',
    position: 'relative',
    zIndex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const loginTextStyles = {
    fontSize: '1.5rem',
    marginBottom: '5px',
  };
  const imageBoxStyles = {
    height: '30vw',
    width: '30vw',
    maxWidth: '125px',
    maxHeight: '125px',
  };
  const formControlStyles = {
    width: '100%',
    maxWidth: '300px',
  };
  const inputStackStyles = {
    width: '100%',
    maxWidth: '300px',
  };
  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '5px',
  };
  const submitButtonStyles = {
    width: '100%',
    maxWidth: '300px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3f51b5',
      opacity: '0.8',
    }
  };

  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <Box sx={parentBoxStyles}>
      <Paper elevation={4} sx={paperStyles}>
        <Box component='form' onSubmit={onSubmit} sx={childBoxStyles}>
          <Box sx={imageBoxStyles}>
            <CardMedia component='img' image={logo} alt='logo' sx={imageBoxStyles} />
          </Box>
          <Typography color='primary' sx={loginTextStyles}>{title}</Typography>
          <Stack direction='column' gap={3} sx={inputStackStyles}>
            <FormControl required={true} sx={formControlStyles}>
              {
                email.lenght > 0
                  ? <InputLabel>Email address</InputLabel>
                  : null
              }
              <InputBase
                id="email-input"
                placeholder="Email"
                autoComplete='Enter'
                type='email'
                sx={inputStyle}
                {...email}
              />
            </FormControl>
            <Stack gap={1}>
              <FormControl required={true} sx={formControlStyles}>
                {
                  password.lenght > 0
                    ? <InputLabel>Password</InputLabel>
                    : null
                }
                <InputBase
                  id="pass-input"
                  placeholder="Password"
                  autoComplete='Password'
                  type='password'
                  sx={inputStyle}
                  {...password}
                />
              </FormControl>
              <Typography variant='caption' color='primary'>Forgot password?</Typography>
            </Stack>
          </Stack>
          <ButtonBase type='submit' sx={submitButtonStyles}>{title}</ButtonBase>
        </Box>
      </Paper>
    </Box>
  )
};

export { UserForm };
