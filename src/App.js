import React from 'react';
import { Logo } from './components/Logo';
import { HomePage } from './pages/HomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/GlobalTheme';
import { Detail } from './pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Logo />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pet/:petId" element={<HomePage />} />
            <Route path="/detail/:detailId" element={<Detail />} />
            <Route path="*" element={<h1>404 Not Found!</h1>} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
