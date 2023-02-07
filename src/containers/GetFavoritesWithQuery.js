import React from "react";
import { useQuery, gql } from "@apollo/client";
import { List, Skeleton } from "@mui/material";
import { PhotoCard } from '../components/PhotoCard';
import { Box } from "@mui/system";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const GetFavoritesWithQuery = () => {
  const { loading, error, data } = useQuery(
    GET_FAVORITES,
    { fetchPolicy: "cache-and-network" }
  );

  const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
  const boxStyles = {
    marginBottom: '20px',
    width: '45%',
    margin: '10px',
    '& img': {
      borderRadius: '12px',
    },
    borderRadius: '12px',
  };

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

  const { favs } = data;

  return (
    <List sx={listStyle}>
      {favs.map(photo => (
        <Box sx={boxStyles} key={photo.id}>
          <PhotoCard
            alt='Images'
            isFavorites={true}
            {...photo}
          />
        </Box>
      ))}
    </List>
  );

};
export { GetFavoritesWithQuery };