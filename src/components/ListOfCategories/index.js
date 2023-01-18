import { List, ListItem } from '@mui/material';
import React from 'react'
import { Category } from '../Category'

const listStyle = {
  display: 'flex',
  overflowX: 'scroll',
  width: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  [ '@media (min-width: 700px)' ]: {
    width: 'max-content',
  },
};
const listItemStyle = {
  padding: '0 0.5rem',
  [ '@media (min-width: 700px)' ]: {
    padding: '0 1rem',
  },
};

const ListOfCategories = () => {
  return (
    <List sx={listStyle} disablePadding={true}>
      {
        [ 1, 2, 3, 4, 5, 6 ].map(category =>
          <ListItem
            key={category}
            disablePadding={true}
            sx={listItemStyle}
          >
            <Category />
          </ListItem>
        )
      }
    </List>
  )
};

export { ListOfCategories };
