import React from 'react';
import { Logo } from './components/Logo';
import { HomePage } from './pages/HomePage';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/GlobalTheme';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Logo />
          {
            // detailId
            //   ? <Routes>
            //     <Route path="/" element={<PhotoCardWithQuery id={detailId} />} />
            //   </Routes>
            //   :
            (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pet/:petId" element={<HomePage />} />
                <Route path="/detail/:detailId" element={<PhotoCardWithQuery />} />
                <Route path="*" element={<h1>404 Not Found!</h1>} />
              </Routes>
            )
          }
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
