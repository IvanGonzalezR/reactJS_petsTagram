import { List } from '@mui/material';
import React from 'react'
import { PhotoCard } from '../PhotoCard';

const listStyle = {
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};
const ListOfPhotoCards = () => {
  return (
    <List sx={listStyle}>
      {[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map(photoCard => (
        <PhotoCard key={photoCard} />
      ))}
    </List>
  )
};

export { ListOfPhotoCards };
