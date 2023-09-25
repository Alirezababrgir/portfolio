import './App.css';
import { Button } from '@mui/material';
import { FaBeer } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({ //create theme for mui rtl
  direction: 'rtl',
  typography:'Vazir,Roboto'
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>بیوگرافی من | صفحه اصلی</title>
          </Helmet>
          <div className='App'>
            <p>سلام پی<FaBeer /></p>
            <Button variant='contained'>کلیک کن</Button>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App;
