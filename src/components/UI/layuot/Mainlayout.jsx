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
import Sidebar from '../Sidebar';
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
          <Appbar />
          <div style={{ marginTop: 64 }} />
          <Box sx={{
            justifyContent:"center",
            textAlign:"center",
            alignItems:"center"
          }}>
            <Grid container height={"200px"}>
              <Sidebar />
              <Grid item xs={12} sm={12} md={9} lg={9} xl={8} sx={{ backgroundColor: "error.main" }}>
                <Typography sx={{ textAlign: "center" }}>item2</Typography>
              </Grid>
              {children}
            </Grid>
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MainLayout;