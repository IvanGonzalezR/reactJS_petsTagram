import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
// import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/GlobalTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
      </ThemeProvider>
    </>
  );
}

export default App;
