import './App.css';
import MainLayout from './layuot/Mainlayout';
import Sidebar from './components/sidebar/Sidebar';
import Sidebardrawer from './components/sidebar/Sidebardrawer';
import Mcontent from './components/maincontent';
import { useState } from 'react';
import Tabpanel from './components/Tabpanel';
import { Drawer, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import MYcontext from './context/context';
function App() {
  const [value, setValue] = useState(0);
  const [draweropen, setdraweropen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlechangetoggle = () => {
    setdraweropen(draweropen => !draweropen);
  }


  return (
    <MYcontext.Provider value={{ value, setValue, draweropen, setdraweropen }}>
      <MainLayout>
        <Box sx={{ display: { xs: "block", md: "none" },position:"absolute"}}>
          <Fab onClick={handlechangetoggle} variant="circular" size="medium" aria-label='sidebar' color='primary'>
            <FormatListBulletedRoundedIcon />
          </Fab>
        </Box>
        <Sidebar handleChange={handleChange} />
        <Drawer
          open={draweropen}
          variant="temporary"
          onClose={setdraweropen}
          anchor="left"
          transitionDuration={200}
          sx={{
            "& .MuiPaper-root": {
              width: 250
            }, display: { xs: "block", md: "none" },
          }}
        >
          <Sidebardrawer handleChange={handleChange} handlechangetoggle={handlechangetoggle} />
        </Drawer>
        <Mcontent>
          <Tabpanel index={0}>
            <Box sx={{height:"140vh", backgroundImage: `url(${require("./assetes/Black-And-Grey-Wallpaper-HD-Desktop.jpg")})`, backgroundRepeat: "no-repeat", backgroundSize:"cover",opacity:"40%"}}>
            <Typography sx={{ color: "whitesmoke" }}>
              home
            </Typography>
            </Box>
          </Tabpanel>
          <Tabpanel index={1}>
            1
          </Tabpanel>
          <Tabpanel index={2}>
            2
          </Tabpanel>
          <Tabpanel index={3}>
            3
          </Tabpanel>
          <Tabpanel index={4}>
            4
          </Tabpanel>
        </Mcontent>
      </MainLayout>
    </MYcontext.Provider>
  );
}
export default App;
