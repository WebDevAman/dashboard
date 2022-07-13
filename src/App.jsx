import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { useState } from 'react';
import './App.css'
function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="flex w-full ">
      <div className="hidden xl:flex">
        <Sidebar />
      </div>
      <div className="flex-1 w-full">
        <Body open={navOpen} setOpen={setNavOpen} />
      </div>
    </div>
  );
}

export default App;
