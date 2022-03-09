import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <main className="main">
        <div className="row">
          <h2>Reclaiming public parks</h2>          
        </div>        
        <div className="row">
          <div class="col">Left col</div>
          <div class="col">Right col</div>
        </div>
    </main>
    </div>
  )
}

export default App
