import { List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { Category } from '../Category'
import axios from 'axios';
// import db from '../../api/db.json'

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
  const [ categories, setCategories ] = React.useState([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://petgram-server-24iykciv5.now.sh/categories');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);
  return (
    <List sx={listStyle} disablePadding={true}>
      {
        categories.length > 0 && (
          categories.map(category =>
            <ListItem
              key={category.id}
              disablePadding={true}
              sx={listItemStyle}
            >
              <Category
                {...category}
              />
            </ListItem>
          ))
        ||
        <Typography variant='body1'>Loading...</Typography>
      }
    </List>
  )
};

export { ListOfCategories };
