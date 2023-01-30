import React from "react";
import { ButtonBase, Grow, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  stackStyle,
  buttonStyle,
} from '../../styles/PhotoCardStyles';

const FavButton = ({ liked, likes, onClick }) => {

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
    <Stack sx={stackStyle}>
      <ButtonBase
        onClick={onClick}
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
  );
};

export { FavButton };