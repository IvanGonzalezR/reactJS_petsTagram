import { Container, Grow, Link, Stack, Typography, Zoom } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/system'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import '../../styles/PhotoCard.css'
import {
  articleStyle,
  containerStyle,
  stackStyle,
  buttonStyle,
} from '../../styles/PhotoCardStyles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [ liked, setLiked ] = useLocalStorage(key, false);
  const [ show, ref ] = useNearScreen();

  const favoriteImageStyle = {
    fontSize: '1.9em',
    color: '#000000',
    display: liked && 'none'
  };
  const favoriteImageSelectedStyle = {
    fontSize: '1.9em',
    color: '#ff0000',
    display: !liked && 'none'
  };

  return (
    <Box component='article' ref={ref} sx={articleStyle}>
      {
        show && (
          <>
            <Link href={`/detail/${id}`}>
              <Container sx={containerStyle} id='image'>
                <img src={src} />
              </Container>
            </Link>
            <Stack sx={stackStyle}>
              <ButtonBase
                onClick={() => setLiked(!liked)}
                size='small'
                sx={buttonStyle}
              >
                <Grow in={!liked} timeout={400} easing={"cubic-bezier(0,-1,.61,1.28)"}>
                  <FavoriteBorderIcon sx={favoriteImageStyle} />
                </Grow>
                <Grow in={liked} timeout={400} easing={"cubic-bezier(0,-1,.61,1.28)"}>
                  <FavoriteIcon sx={favoriteImageSelectedStyle} />
                </Grow>
              </ButtonBase>
              <Typography variant='body2'>
                {likes} Likes
              </Typography>
            </Stack>
          </>
        )
      }
    </Box >
  )
}

export { PhotoCard };  