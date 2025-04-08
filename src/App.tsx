import './App.css'
import { Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
// import Hero from './components/Hero';
// import CorePromo from './components/CorePromo';

function App() {

  return (
    <div className="flex flex-col h-screen justify-between">      
      <TopNav />
      <Outlet />
      <BottomNav />
    </div>
  )
}

export default App
