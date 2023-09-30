import './App.css';
import MainLayout from './components/UI/layuot/Mainlayout';
import Sidebar from './components/UI/Sidebar';
import Mcontent from './components/maincontent';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange}/>
      <Mcontent />
    </MainLayout>
  );
}
export default App;
