import { Helmet, HelmetProvider } from 'react-helmet-async';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../theme';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Appbar from '../Appbar'
import Grid from '@mui/material/Unstable_Grid2';

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
          <Appbar />
          <div style={{marginTop: 70}}/>
          <Box  sx={{
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            <Grid container spacing={2} height={"200px"}>
              <Grid item xs={8} sx={{backgroundColor:"warning.main"}}>
                <Typography sx={{textAlign:"center"}}>item1</Typography>
              </Grid>
              <Grid item xs={4} sx={{backgroundColor:"error.main"}}>
                <Typography sx={{textAlign:"center"}}>item2</Typography>
              </Grid>
            </Grid>
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MainLayout;