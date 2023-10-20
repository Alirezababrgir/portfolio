import { HelmetProvider } from 'react-helmet-async';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material/styles';
import {Theme01, Theme02} from './theme';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useContext } from 'react';
import MYcontext from '../context/context';
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children}) => {

  const { mod} = useContext(MYcontext);


  const Theme=mod==="dark" ? Theme01 : Theme02;


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={Theme}>
        <HelmetProvider>
          
          <Box sx={{
            justifyContent:"center",
            textAlign:"center",
            alignItems:"center",
          }}>
            <Grid container>
              {children}
            </Grid>
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MainLayout;