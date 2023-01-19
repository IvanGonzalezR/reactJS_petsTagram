import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyless } from './GlobalStyles';
// import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { PhotoCard } from './components/PhotoCard';

function App() {
  return (
    <>
      {/* <GlobalStyless /> */}
      <ListOfCategories />
      <PhotoCard />
    </>
  );
}

export default App;
