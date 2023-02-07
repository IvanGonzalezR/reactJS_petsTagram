import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { GetFavoritesWithQuery } from '../containers/GetFavoritesWithQuery';

const Favs = () => {
  const boxStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <Box sx={boxStyles}>
        <Typography variant='h4' color='orangered'>Favorites</Typography>
      </Box>
      <GetFavoritesWithQuery />
    </>
  )
}

export { Favs };
