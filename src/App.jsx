import './App.css'

import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import Proposals from './views/Proposals/Proposals';
import Events from './views/Events/Events';
import About from './views/About/About';

function App() {
  
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/proposals" element={<Proposals />} />        
        <Route path="/events" element={<Events />} />        
        <Route path="/about" element={<About />} />        
      </Routes>      
    </div>
  )
}

export default App
