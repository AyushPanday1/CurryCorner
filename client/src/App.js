import './App.css';
import Login from '../src/Pages/Login/Login';
import ReactDOM from 'react-dom/client';
import Home from './Pages/HomePage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from '../src/Pages/Resister/Resister';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
