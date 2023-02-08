import { Container } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import '../../styles/PhotoCard.css'
import {
  articleStyle,
  containerStyle,
} from '../../styles/PhotoCardStyles';
// import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { useMutationToggleLike } from '../../hooks/useMutationToggleLike';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE, isFavorites }) => {
  // const key = `like-${id}`;
  // const [ liked, setLiked ] = useLocalStorage(key, false);
  const [ show, ref ] = useNearScreen();
  const { mutation, mutationError } = useMutationToggleLike();
  const navigate = useNavigate();

  if (mutationError) {
    sessionStorage.removeItem('token');
    navigate('/user');
  }

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    }).then(({ data }) => {
      const { likeAnonymousPhoto } = data;
      // console.log(likeAnonymousPhoto);
    })
  };

  return (
    <Box component='article' ref={ref} sx={articleStyle}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <Container sx={containerStyle} id='image'>
                <img src={src} />
              </Container>
            </Link>
            {
              isFavorites
                ?
                null
                :
                <FavButton
                  likes={likes}
                  liked={liked}
                  onClick={handleFavClick}
                />
            }
          </>
        )
      }
    </Box >
  )
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  isFavorites: PropTypes.bool,
  likes: (props, propName, componentName) => {
    const propValue = props[ propName ];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  }
};

export { PhotoCard };  