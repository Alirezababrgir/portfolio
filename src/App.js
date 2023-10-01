import './App.css';
import MainLayout from './components/UI/layuot/Mainlayout';
import Sidebar from './components/UI/Sidebar';
import Mcontent from './components/maincontent';
import { useState } from 'react';
import Tabpanel from './components/tabs/Tabpanel';
function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
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
