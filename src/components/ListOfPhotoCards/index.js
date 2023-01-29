import { List } from '@mui/material';
import React from 'react'
import { PhotoCard } from '../PhotoCard';
import { ListOfPhotoCardsComponent } from '../../containers/ListOfPhotoCards';
import Skeleton from '@mui/material/Skeleton';

const listStyle = {
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data, error } = ListOfPhotoCardsComponent(categoryId);

  const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
  if (loading) {
    return (
      array.map(id => (
        <React.Fragment key={id}>
          <Skeleton variant="rectangular"
            width='100%'
            height='100px'
          />
          <Skeleton
            width='10%'
            height='40px' />
          <Skeleton
            width='15%'
            height='40px' />
        </React.Fragment>
      ))
    )
  }
  if (error) {
    return <p>Internal Server Error</p>
  }
  return (
    <List sx={listStyle}>
      {data.photos.map(photo => (
        <PhotoCard
          key={photo.id}
          alt="Imagenes"
          {...photo}
        />
      ))}
    </List>
  )
};

export { ListOfPhotoCards };
