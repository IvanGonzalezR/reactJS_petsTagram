import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
// import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/GlobalTheme';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <ThemeProvider theme={theme}>
        <Logo />
        {
          detailId ?
            <PhotoCardWithQuery id={detailId} />
            :
            <>
              <ListOfCategories />
              <ListOfPhotoCards />
            </>
        }
      </ThemeProvider>
    </>
  );
}

export default App;
