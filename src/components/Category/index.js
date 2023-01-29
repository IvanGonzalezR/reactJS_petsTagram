import { Avatar, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import React from 'react'
import { Container } from '@mui/system';

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

const linkStyle = {
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 !important',
};
const textStyle = {
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
};
const avatarStyle = {
  width: '18vw',
  height: '18vw',
  maxWidth: '75px',
  maxHeight: '75px',
  minWidth: '60px',
  minHeight: '60px',
  border: '1px solid #ddd',
  boxShadow: '5px 7px 14px -2px rgba(0, 0, 0, 0.23)',
  overflow: 'hidden',
  ObjectFit: 'cover',
};

const Category = ({
  cover = DEFAULT_IMAGE,
  path = '#',
  emoji = '🐶'
}) => {
  return (
    <Container sx={linkStyle}>
      <Link to={path}>
        <Avatar src={cover} sx={avatarStyle} alt="imagen" />
        <Typography sx={textStyle}>
          {emoji && emoji}
        </Typography>
      </Link>
    </Container>
  )
}

export { Category };

