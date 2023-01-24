import { List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { Category } from '../Category'
import '../../styles/ListOfCategories.css'

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
  // '-webkit-tap-highlight-color': 'transparent',
};

function useCategoriesData() {
  const [ categories, setCategories ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const fetchCategories = async () => {
      const response = await fetch('https://petgram-server-24iykciv5.now.sh/categories');
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    }
    fetchCategories();
  }, []);

  return { categories, loading };
}

const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [ showFixed, setShowFixed ] = React.useState(false);

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
      fixed={(fixed ? 'true' : undefined)}
      sx={listStyle}
      id={isCopy ? 'listOfCategories' : ''}
    >
      {
        !loading && (
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
