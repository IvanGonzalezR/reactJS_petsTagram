import React from 'react'
import { Box, Button, ButtonBase, CardMedia, FormControl, Input, InputBase, InputLabel, Paper, Typography } from '@mui/material';
import { useInputValue } from '../../hooks/useInputValue';
import { Stack } from '@mui/system';
import logo from '../../img/petgram.png';
import LockIcon from '@mui/icons-material/Lock';

const UserForm = (
  { signUp,
    setSignUp,
    onRegister,
    onLogin,
    loginError,
    loginLoading,
    registerError,
    registerLoading }) => {

  const [ confirmPassword, setConfirmPassword ] = React.useState('');
  const [ passDoNotMatch, setPassDoNotMatch ] = React.useState(false);

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
    height: '75vh',
    width: '70%',
    maxWidth: '300px',
    maxHeight: '500px',
    padding: '20px 20px',
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
    height: signUp ? '240px' : '190px',
    display: 'flex',
    padding: '0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '5px',
    '&:hover': {
      border: '1px solid #aba',
    },
    '&:focus': {
      border: '1px solid #aba',
    },
  };
  const signOptionsStyles = {
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  const submitButtonStyles = {
    width: '100%',
    maxWidth: '300px',
    marginTop: '10px',
    height: '34px',
    fontSize: '1rem',
    borderRadius: '10px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3f51b5',
      opacity: '0.8',
    },
    '&:disabled': {
      opacity: '0.3',
    }
  };

  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp ? handleSignUp() : handleLogin();
    console.log(signUp);
  };

  const handleSignUp = () => {
    const input = {
      email: email.value,
      password: password.value
    };
    if (email.value.length <= 0 || password.value.length <= 0
      || confirmPassword.length <= 0) {
      console.log('Passwords do not match');
      setPassDoNotMatch(true);
    } else if (password.value == confirmPassword) {
      console.log('they match!');
      onRegister(input);
    }
  }

  const handleLogin = () => {
    const input = {
      email: email.value,
      password: password.value
    };
    if (email.value.length <= 0 || password.value.length <= 0) {
      alert('fill the inputs');
    } else {
      onLogin(input);
    }
  }

  return (
    <Box sx={parentBoxStyles}>
      <Paper elevation={4} sx={paperStyles}>
        <Box component='form' sx={childBoxStyles}>
          <Box sx={imageBoxStyles}>
            <CardMedia component='img' image={logo} alt='logo' sx={imageBoxStyles} />
          </Box>
          <Typography color='primary' sx={loginTextStyles}>{signUp ? 'Sign Up' : 'Login'}</Typography>
          <Stack direction='column' sx={inputStackStyles}>
            {
              (registerError || loginError)
              && <Typography color='error' variant='body2'>
                Ups!, ocurrió un error inesperado :(
              </Typography>
            }
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
                disabled={registerLoading || loginLoading}
                sx={inputStyle}
                {...email}
              />
            </FormControl>
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
                disabled={registerLoading || loginLoading}
                {...password}
                endAdornment={<LockIcon sx={{ color: '#ccc' }} />}
              />
            </FormControl>

            {
              signUp
                ? (
                  <FormControl required={true} sx={formControlStyles}>
                    {
                      confirmPassword.lenght > 0
                        ? <InputLabel>Confirm password</InputLabel>
                        : null
                    }
                    <InputBase
                      id="confirmPass-input"
                      placeholder="Confirm password"
                      autoComplete='Password'
                      type='password'
                      disabled={registerLoading || loginLoading}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      sx={inputStyle}
                      endAdornment={<LockIcon sx={{ color: '#ccc' }} />}
                    />
                  </FormControl>
                )
                : null
            }
            {
              signUp
                ? (
                  <Stack sx={{ alignItems: 'center' }} gap={0.3}>
                    {
                      passDoNotMatch
                      && <Typography color='error' variant='body2'>Passwords do not match</Typography>
                    }
                    <Typography variant='caption' color='primary'>Already have an account?</Typography>
                    <ButtonBase onClick={() => setSignUp(!signUp)}>
                      <Typography variant='caption' color='primary'>Login</Typography>
                    </ButtonBase>
                  </Stack>
                )
                : (
                  <Stack sx={signOptionsStyles}>
                    <Typography variant='caption' color='primary'>Forgot password?</Typography>
                    <Typography variant='caption' color='primary'>Or</Typography>
                    <ButtonBase onClick={() => setSignUp(!signUp)} >
                      <Typography variant='caption' color='primary'>Sign up</Typography>
                    </ButtonBase>
                  </Stack>
                )
            }
          </Stack>
          <ButtonBase
            type='submit'
            disabled={registerLoading || loginLoading}
            sx={submitButtonStyles}
            onClick={handleSubmit}
          >{
              signUp
                ? 'Sign up'
                : 'Login'
            }</ButtonBase>
        </Box>
      </Paper >
    </Box >
  )
};

export { UserForm };
