import { List } from '@mui/material';
import React from 'react'
import { PhotoCard } from '../PhotoCard';
import { useQuery, gql } from '@apollo/client';
import Skeleton from '@mui/material/Skeleton';

const listStyle = {
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

const withPhotos = gql`
    query getPhotos{
      photos{
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
`;

const ListOfPhotoCards = () => {

  const { loading, error, data } = useQuery(withPhotos);
  console.log(data);

  const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
  return (
    loading ?
      (
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
      :
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
