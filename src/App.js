import './App.css';
import MainLayout from './components/UI/layuot/Mainlayout';
import Sidebar from './components/UI/Sidebar';
import Mcontent from './components/maincontent';
import { useState } from 'react';
import Tabpanel from './components/tabs/Tabpanel';
import { Drawer } from '@mui/material';

function App() {
  const [value, setValue] = useState(0);
  const [draweropen, setdraweropen] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <Drawer
        open={draweropen}
        variant="temporary"
        onClose={setdraweropen}
        sx={{
          "& .MuiPaper-root": {
            width: 400
          }
        }}
      >
        <Sidebar value={value} handleChange={handleChange} />
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
