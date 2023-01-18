import { Avatar, Container, Link } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

const linkStyle = {
  width: 'fit-content',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
  emoji = '?'
}) => {
  return (
    // <Container maxWidth='xs'>
    <Link href={path} sx={linkStyle}>
      <Avatar src={cover} sx={avatarStyle} />
      {emoji && emoji}
    </Link>
    // </Container>
  )
}

export { Category };

