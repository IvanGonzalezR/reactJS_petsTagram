import { List, ListItem, Typography } from '@mui/material';
import React from 'react'
import { Category } from '../Category'
import '../../styles/ListOfCategories.css'
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/system';

const stackSkeletonStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  '&:first-of-type': {
    marginLeft: '0.7rem',
  },
};
const skeletonStyle = {
  width: '18vw',
  height: '18vw',
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

  const listStyle = {
    display: 'flex',
    overflow: 'scroll',
    width: '100%',
    height: showFixed ? '88px' : '95px',
    marginBottom: '0.4rem',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  };
  const listItemStyle = {
    padding: '0 0.5rem',
    height: showFixed ? '80px' : '95px',
    transform: showFixed ? 'scale(0.85)' : 'scale(0.97)',
  };

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
                path={`/pet/${category.id}`}
              />
            </ListItem>
          ))
        ||
        (
          [ 1, 2, 3, 4, 5, 6 ].map(id => (
            <Stack sx={stackSkeletonStyle} key={id}>
              <Skeleton
                variant="circular"
                sx={skeletonStyle}>
                <Category />
              </Skeleton>
              <Skeleton variant='text' width='1.5rem' height='1.5rem' />
            </Stack>
          ))
        )
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
