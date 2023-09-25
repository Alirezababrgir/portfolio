import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Appbar  from './components/UI/Appbar';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const darkTheme = createTheme({//create darktheme for mui rtl
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    direction: 'rtl',
    typography:'Vazir,Roboto'
  },
});


function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={darkTheme}>
        <HelmetProvider>
          <Helmet>
            <title>بیوگرافی من | صفحه اصلی</title>
          </Helmet>
          <Appbar/>
          {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App;
