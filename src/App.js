import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyless } from './GlobalStyles';
// import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { PhotoCard } from './components/PhotoCard';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

function App() {
  return (
    <>
      {/* <GlobalStyless /> */}
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}

export default App;
