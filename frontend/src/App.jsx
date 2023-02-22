import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/connect' element={<Connect/>}/>
          
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
