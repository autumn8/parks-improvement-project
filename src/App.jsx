import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import Proposals from './views/Proposals/Proposals';
import Events from './views/Events/Events';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/proposals" element={<Proposals />} />        
        <Route path="/events" element={<Events />} />        
      </Routes>      
    </div>
  )
}

export default App
