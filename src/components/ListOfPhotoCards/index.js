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
  const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
  return (
    <List sx={listStyle}>
      {array.map(id => (
        <PhotoCard
          key={id}
          id={id}
          alt="Imagenes"
        />
      ))}
    </List>
  )
};

export { ListOfPhotoCards };
