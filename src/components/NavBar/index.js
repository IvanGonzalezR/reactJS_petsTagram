import React from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [ value, setValue ] = React.useState('home');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 'home') return navigate('/');
    navigate(`/${newValue}`);
  };

  const bottomNavStyles = {
    width: '100%',
    height: '48px',
  };
  const paperStyles = {
    width: '100%',
    maxWidth: '500px',
    position: 'fixed',
    bottom: 0,
    zIndex: 1000,
    borderTop: '1px solid #e0e0e0',
    backgroundColor: '#fff',
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <Paper sx={paperStyles} elevation={3}>
      <BottomNavigation
        sx={bottomNavStyles}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          onClick={handleScrollToTop}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="User"
          value="user"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
};

export { NavBar }
