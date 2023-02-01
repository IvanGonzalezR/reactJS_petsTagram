import React from 'react';
import { Logo } from './components/Logo';
import { HomePage } from './pages/HomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/GlobalTheme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Detail } from './pages/Detail';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { shallowEqual, useSelector } from 'react-redux';



function App() {
  const isAuth = useSelector((state) => state.isAuth, shallowEqual);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Logo />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pet/:petId" element={<HomePage />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="/favorites" element={
              isAuth
                ? <Favs />
                : <NotRegisteredUser />
            } />
            <Route path="/user" element={
              isAuth
                ? <User />
                : <NotRegisteredUser />
            } />
            <Route path="*" element={<h1>404 Not Found!</h1>} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
