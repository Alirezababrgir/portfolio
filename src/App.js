import './App.css';
import MainLayout from './components/UI/layuot/Mainlayout';
import Sidebar from './components/UI/Sidebar';
import Sidebardrawer from './components/UI/Sidebardrawer';
import Mcontent from './components/maincontent';
import { useState } from 'react';
import Tabpanel from './components/tabs/Tabpanel';
import { Drawer } from '@mui/material';
import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';

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
    <MainLayout>
      <Box sx={{ display: { xs: "block", md: "none" }, m: 2 }}>
        <Fab onClick={handlechangetoggle} variant="circular" size="medium" aria-label='sidebar' color='primary'>
          <FormatListBulletedRoundedIcon />
        </Fab>
      </Box>
      <Sidebar value={value} handleChange={handleChange} />
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
        <Sidebardrawer value={value} handleChange={handleChange} handlechangetoggle={handlechangetoggle} setdraweropen={setdraweropen}/>
      </Drawer>
      <Mcontent>
        <Tabpanel value={value} index={0}>
          home
        </Tabpanel>
        <Tabpanel value={value} index={1}>
          1
        </Tabpanel>
        <Tabpanel value={value} index={2}>
          2
        </Tabpanel>
        <Tabpanel value={value} index={3}>
          3
        </Tabpanel>
        <Tabpanel value={value} index={4}>
          4
        </Tabpanel>
      </Mcontent>
    </MainLayout>
  );
}
export default App;
