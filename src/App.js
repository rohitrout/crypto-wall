import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';
function App() {
  return (
  
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<HomePage/>}/>
      <Route path='/coins/:id' element={<CoinPage/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
