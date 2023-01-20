import { List, ListItem } from '@mui/material';
import React from 'react'
import { Category } from '../Category'
import db from '../../api/db.json'

const listStyle = {
  display: 'flex',
  overflow: 'scroll',
  width: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
};
const listItemStyle = {
  padding: '0 0.5rem',
  [ '@media (min-width: 700px)' ]: {
    // padding: '0 1rem',
  },
};

const ListOfCategories = () => {
  return (
    <List sx={listStyle} disablePadding={true}>
      {
        db.categories.map(category =>
          <ListItem
            key={category.id}
            disablePadding={true}
            sx={listItemStyle}
          >
            <Category
              {...category}
            />
          </ListItem>
        )
      }
    </List>
  )
};

export { ListOfCategories };
