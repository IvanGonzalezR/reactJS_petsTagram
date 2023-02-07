import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeAuth } from '../slices/basicSlice'

const User = () => {
  const dispatch = useDispatch();

  const boxStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    '& button': {
      width: '60%',
      height: '7%',
      borderRadius: '12px',
    },
  }

  const handleOnclick = () => {
    dispatch(removeAuth());
  }
  return (
    <>
      <Box sx={boxStyles}>
        <Button
          variant='contained'
          color='error'
          onClick={handleOnclick}
        >
          Sign out
        </Button>
      </Box>
    </>
  )
}

export { User };
