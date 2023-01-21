import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
// import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

function App() {
  return (
    <>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}

export default App;
