import { Helmet, HelmetProvider } from 'react-helmet-async';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../theme';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>
          <Helmet>
            <title>بیوگرافی من | صفحه اصلی</title>
          </Helmet>
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MainLayout;