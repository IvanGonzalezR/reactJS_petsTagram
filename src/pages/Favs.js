import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { GetFavoritesWithQuery } from '../containers/GetFavoritesWithQuery';
import { Layout } from '../components/Layout';

const Favs = () => {
  const boxStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <>
      <Layout
        title={`Favorites`}
        subtitle='Here you can find your favorite pets pictures!'
      >
        <Box sx={boxStyles}>
          <Typography variant='h4' color='orangered'>Favorites</Typography>
        </Box>
        <GetFavoritesWithQuery />
      </Layout>
    </>
  )
}

export { Favs };
