import './App.css';
import MainLayout from './layuot/Mainlayout';
import Sidebar from './components/sidebar/Sidebar';
import Sidebardrawer from './components/sidebar/Sidebardrawer';
import Mcontent from './components/maincontent';
import { useState } from 'react';
import { Drawer} from '@mui/material';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import MYcontext from './context/context';
import Pages from './components/pages/pages';

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
         <Pages handleChange={handleChange} value={value}/>
        </Mcontent>
      </MainLayout>
    </MYcontext.Provider>
  );
}
export default App;
