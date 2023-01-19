import { Avatar, Container, Link } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { Box, padding } from '@mui/system'
import React from 'react'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
const containerStyle = {
  overflow: 'hidden',
  padding: '0 !important',
  borderRadius: '10px',
  display: 'block',
  padding: '56.25% 0 0 0 !important',
  position: 'relative',
  width: '100%',
  height: 0,
  '& img': {
    position: 'absolute',
    boxShadow: '0 10px 14px rgba(0,0,0,.2)',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    width: '100%',
  },
};
const buttonStyle = {
  paddingTop: '8px',
};

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <Box component='article'>
      <Link href={`/detail/${id}`}>
        <Container sx={containerStyle}>
          <img src={src} alt='' />
          {/* <Avatar src={src} variant='square' /> */}
        </Container>
      </Link>
      <ButtonBase size='small' sx={buttonStyle}>
        {likes} Likes!
      </ButtonBase>
    </Box>
  )
}

export { PhotoCard };  