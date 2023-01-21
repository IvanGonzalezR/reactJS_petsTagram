import { List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { Category } from '../Category'
import './ListOfCategories.css'

const listStyle = {
  display: 'flex',
  overflow: 'scroll',
  width: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '&.fixed': {
    position: 'fixed',
    top: '0px',
    width: '100%',
    backgroundColor: '#fefefe',
    borderRadius: '0 0 5px 5px',
    boxShadow: '0px 14px 29px -26px rgba(10, 10, 10, 0.74)',
    zIndex: '1',
    padding: '5px',
    maxWidth: '500px',
  },
};
const listItemStyle = {
  padding: '0 0.5rem',
};

const ListOfCategories = () => {
  const [ categories, setCategories ] = React.useState([]);
  const [ showFixed, setShowFixed ] = React.useState(false);

  React.useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://petgram-server-24iykciv5.now.sh/categories');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  React.useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 130;
      newShowFixed !== showFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [ showFixed ]);

  const renderList = (fixed, isCopy) => (
    <List
      className={(fixed ? 'fixed' : '')}
      sx={listStyle}
      disablePadding={true}
      id={isCopy ? 'listOfCategories' : ''}
    >
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
  );
  return (
    <>
      {renderList()}
      {showFixed && renderList(true, true)}
    </>
  )
};

export { ListOfCategories };
